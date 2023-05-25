import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

import logo from "../../assets/img/autres/logo.png";
import style from "./header.module.css";
import { signOut } from "../../store/slices/user";

function Header() {
    const dispatch = useDispatch();
    const {user, cart: {totalAmount}} = useSelector(state => state);    
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOut());
        navigate("/");
    }

    return (
        <header className={style.headerCtn}>
            <small>Livraison offerte à partir de 65€ d'achat !</small>

            <Link to={"/cart"} className={style.banCart}>
                <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} />
                <span>{totalAmount}€</span>
            </Link>

            <Link to="/">
                <h1>
                    <img src={logo} alt="Vers la page d'accueil" />
                </h1>
            </Link>

            <nav>
                <NavLink to="/tea">thés</NavLink>
                <NavLink to="/about">notre histoire</NavLink>

                { !user.isLogged ? 
                    <NavLink to="/entry" state={{type: "se connecter"}}>Connexion</NavLink>
                    :
                    <>
                    <NavLink to="/dashboard" >Compte</NavLink>
                    <button className={style.CTA_signOut} onClick={handleSignOut}>Déconnexion</button>
                    </>
                    
                }
            </nav>
        </header>
    );
}

export default Header;
