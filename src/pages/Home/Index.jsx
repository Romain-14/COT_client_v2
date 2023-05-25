import { useEffect, useState } from 'react';
import { getDatas } from '../../services/api';

import style from "./home.module.css";
import spinner from "../../assets/img/spinner.svg";

import Title from '../../Components/UI/Title/Index';
import Wrapper from './Components/Wrapper';

function Home() {
	const [categories, setCategories] = useState(null);

	const [newProduct, setNewProduct] = useState(null);
	const [bestSeller, setBestSeller] = useState(null); // quand on aura une commande, effectuer un algo' pour récupérer l'article le plus vendu + changer sa valeur de base
	const [ourFavorite, setOurFavorite] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		async function fetchCategories(){
			try {
				const categories  = await getDatas("/category");
				const newProduct  = await getDatas("/tea/lastInserted");
				const ourFavorite = await getDatas("/tea/favorite");
				
				setCategories(categories.data.result);
				setNewProduct(newProduct.data.result);
				setOurFavorite(ourFavorite.data.result);

				setIsLoading(false);
			} catch (error) {
				throw Error(error);
			}		
		}
		fetchCategories();
	}, []);


	if(isLoading) return (
		<div className={style.spinner}>
			<img src={spinner} alt=""/>
		</div>
	)

    return (
		<main className={style.main}>		
			
			<section className="ctn">

				<Title level={2} title="Choisissez votre thé" />
				
				{ categories.map( c => 
					<Wrapper key={c.id} pathImg="category" item={c}/>
				)}
				
			</section>

			<div className={`${style.ctn} ${style.secondaryCtn}`}>

				<Wrapper pathImg="tea" item={newProduct} title="Notre nouveauté" detail={true} />

				<Wrapper pathImg="tea" item={bestSeller} title="Notre best-seller" detail={true} />	

				<Wrapper pathImg="tea" item={ourFavorite} title="Notre Coup de coeur" detail={true} />

			</div>
	
		</main>
    )
}

export default Home;