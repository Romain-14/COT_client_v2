import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMoneyBill, faTruck, faPhone, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import style from "./footer.module.css";

function Footer() {
	return (
		<footer className={style.footerCtn}>
			<div className={style.info}>
				<dl>
					<dt><FontAwesomeIcon icon={faLock}/></dt>
					<dd>paiement sécurisé</dd>
				</dl>
				<dl>
					<dt><FontAwesomeIcon icon={faTruck}/></dt>
					<dd>ma livraison offerte</dd>
				</dl>
				<dl>
					<dt><FontAwesomeIcon icon={faMoneyBill}/></dt>
					<dd>carte de fidélité</dd>
				</dl>
				<dl>
					<dt><FontAwesomeIcon icon={faPhone}/></dt>
					<dd>service client</dd>
				</dl>
				<dl>
					<dt><FontAwesomeIcon icon={faCircleCheck}/></dt>
					<dd>garantie qualité</dd>
				</dl>
			</div>

			<div>
			
				<nav className={style.menu}>
					<h4>cup of tea</h4>
					<Link to={"#"}>Notre histoire</Link>
					<Link to={"#"}>Nos boutiques</Link>
					<Link to={"#"}>Le Thé de A à Z</Link>
					<Link to={"#"}>Espace clients professionnels</Link>
					<Link to={"#"}>Recrutement</Link>
					<Link to={"#"}>Contactez-nous</Link>
					<Link to={"#"}>L'école du Thé</Link>
				</nav>

				<nav className={style.menu}>
					<h4>commandez en ligne</h4>
					<Link to={"#"}>Première visite</Link>
					<Link to={"#"}>Aide - FAQ</Link>
					<Link to={"#"}>Service client</Link>
					<Link to={"#"}>Suivre ma commande</Link>
					<Link to={"#"}>Recutement</Link>
					<Link to={"#"}>CVG</Link>
					<Link to={"#"}>Informations légales</Link>
				</nav>
				
				<nav className={style.menu}>
					<h4>Suivez-nous</h4>
					<Link to={"#"}>Notre histoire</Link>
					<Link to={"#"}>Nos boutique</Link>
					<Link to={"#"}>Le Thé de A à Z</Link>
					<Link to={"#"}>Espace clients professionnels</Link>
					<Link to={"#"}>Recrutement</Link>
				</nav>
			</div>
		</footer>
	)
}

export default Footer;