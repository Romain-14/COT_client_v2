import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getUserAuth } from '../../services/api.js';

// HOC pour les routes de l'utilisateur -> accès au panier, gestion de comptes (commandes ..)
function HOCAuth({child, auth}) {
    const navigate = useNavigate();
	const [isAuthorized, setIsAuthorized] = useState(false);

    const Child = child;

    useEffect(() => {
        async function checkAuth(){
			if(auth){
				const TOKEN = localStorage.getItem("auth");
				let res = null;
				if(TOKEN){
					res = await getUserAuth("/user/checkToken", TOKEN);
					
					if(res.status === 200) setIsAuthorized(true);
				}
				if(res.code || !TOKEN) navigate("/");
			}
            
        }
        checkAuth();
    });
	
	if(isAuthorized) return <Child />
	
}

export default HOCAuth;