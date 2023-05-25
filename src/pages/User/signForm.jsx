import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./form.module.css";

import {signup, signin} from "../../services/api.js"
import { useDispatch } from "react-redux";
import { signIn } from "../../store/slices/user";

function SignForm() {
    const {state: { type }} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [msg, setMsg] = useState(null);

    const [ inputs, setInputs ] = useState(
        { email: "", password: "" }
    );
    const { email, password } = inputs;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        type === "se connecter" ?
            handleSignIn() 
            :
            handleSignUp();
    };

    const handleSignIn = async () => {
        try{
            const res = await signin(inputs); // envoyer des inputs "sains/nettoyés"
            localStorage.setItem("auth", res.data.result.TOKEN);
            dispatch(signIn(res.data.result.email));
            navigate("/");

        } catch(err){
            setMsg("problème d'identifiant");
        }
    };

    const handleSignUp = async () => {
        const res = await signup(inputs);
        if(res.status === 201){
            setInputs({ email: "", password: "" });
            navigate("/entry", {state: {type: "se connecter"}});
        }
        // else envoyer un message d'erreur (gérer coté back la réponse : erreur serveur, email déjà existant ..)
    };

    return (
        <main className={style.main}>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email :</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">password :</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input type="submit" value={type} />
            </form>

            {msg && <p>{msg}</p>}

            {type === "se connecter" && (
                <p>
                    Pas de compte ? En créer un{" "}
                    <Link
                        to={"/entry"}
                        state={{ type:"s'enregistrer" }}
                    >
                        👉 ici 👈
                    </Link>
                </p>
            )}
        </main>
    );
}

export default SignForm;
