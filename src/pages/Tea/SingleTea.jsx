import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDatas } from "../../services/api";
import spinner from "../../assets/img/spinner.svg";
import Title from "../../Components/UI/Title/Index";

import style from "./tea.module.css"
import { addToCart, calculateTotalAmount } from "../../helpers/cart";
import { modifyCart } from "../../store/slices/cart";

function SingleTea() {
    const { id } = useParams();

    const {cart} = useSelector(state => ({...state.cart}));
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [pkg, setPkg] = useReducer((currentPkg, newPkg) => ({
        ...currentPkg, ...newPkg,
    }), { idPkg: null, ref: null, price: null, });

    useEffect(() => {
        async function fetchProduct() {
            try {
                const product = await getDatas(`/tea/${id}`);
                const baseTea = product.data.result.teaInfo[0];
                
                setProduct(product.data.result);
                setPkg({
                    idPkg: baseTea.idPackaging,
                    ref: baseTea.ref,
                    price: baseTea.price
                });
                
                setIsLoading(false);
            } catch (error) {
                throw Error(error);
            }
        }
        fetchProduct();
    }, [id]);

    const changeHandler = (e) => {
        const indexPackaging = product.teaInfo.findIndex(t => parseInt(e.target.value) === t.idPackaging);
        setPkg({idPkg: parseInt(e.target.value), ref: product.teaInfo[indexPackaging].ref, price: product.teaInfo[indexPackaging].price});
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        const teaToAdd = {id:product.id, ...product.teaInfo[product.teaInfo.findIndex(t => parseInt((t.idPackaging)) === parseInt(pkg.idPkg))]};
        const newCart = addToCart( cart, teaToAdd );
        const totalAmount = calculateTotalAmount(newCart).toFixed(2);
        dispatch(modifyCart({cart: newCart, totalAmount}));
    };

    if (isLoading)
        return (
            <div className="spinner">
                <img src={spinner} alt="" />
            </div>
        );

    return (
        <main id="single-tea">
            <section className={style.ctn}>
                <Title level={2} title={product.mainTitle} />
                <Title level={3} title={product.subTitle} />
           
                <p>Ref: {pkg.ref}</p>

				<img src={`/img/tea/${product.url_img}`} alt="" />

				<form>
					<select value={pkg.idPackaging} onChange={changeHandler}>
						{
							product.teaInfo.map(info => {
								return (
									<option key={info.idPackaging} value={info.idPackaging}>Pochette de {info.weight}</option>
								)
							})
						}
					</select>
				</form>

                <p>{pkg.price}€</p>
                
				<button className="addToCart" onClick={handleAddToCart}>ajouter au panier</button>
                <p>❤️ Ajouter à ma liste d'envies</p>

                <p>{product.description}</p>

                <p><strong>Profitez d'une remise de 5% sur la pochette de 500g (prix déjà remisé)</strong></p>        
                <p><strong>Profitez d'une remise de 10% sur la pochette d' 1kg (prix déjà remisé)</strong></p> 
                
            </section>
        </main>
    );
}

export default SingleTea;
