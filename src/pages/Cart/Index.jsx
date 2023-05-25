import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { getDatas } from "../../services/api";

function Cart() {
    const [product, setProduct] = useState(null);
    const { cart, totalAmount } = useSelector((state) => state.cart);
    
    useEffect(() => {
        let product = [];
        async function fetchData() {
            try {
                for (const c of cart) {
                    let res = await getDatas("/cart/" + c.id);
                    product = [...product, { ...res.data.result[0], ...c }];
                }
                setProduct(product);
            } catch (error) {
                throw new Error(error);
            }
        }
        fetchData();
    }, [cart]);

    return (
        <>
            {!cart.length && <p>vous n'avez rien dans votre panier 😭</p>}
            {!product ? (
                (<p>loading</p>)
            ) : (
                <ul>
                    {product.map((p, index) => (
                        <Fragment key={index}>
                        <li key={index}>
                            {p.mainTitle} | {p.quantity} sachet{'\u0028'}s{'\u0029'} de {p.weight} pour un total de {p.totalAmount}€
                        </li>
                        </Fragment>
                    ))}
                    <li>Montant du panier : {totalAmount}€</li>
                </ul>
            )}
        </>
    );
}

export default Cart;
