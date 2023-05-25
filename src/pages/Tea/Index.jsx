import {useEffect, useState} from 'react';

import Wrapper from './Components/Wrapper';
import { getDatas } from '../../services/api.js';
import spinner from "../../assets/img/spinner.svg";

function Tea() {

    const [teas, setTeas] = useState(null);
    const [categories, setCategories] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    
        async function fetchData(){
            try{
                const teas = await getDatas("/tea");
                const categories = await getDatas("/category");
                
                setTeas(teas.data.result);
                setCategories(categories.data.result);
                setIsLoading(false);
            } catch(err){
                throw new Error(err);
            }
            
        }
        fetchData();
    }, []);

    if (isLoading)
    return (
        <div className="spinner">
            <img src={spinner} alt="" />
        </div>
    );

    return (
        <>
            {
                categories ?
                    categories.map(c => {
                        return (
                            <section key={c.id}>
                                <h2>{c.title}</h2>
                                <p>{c.description}</p>
                                {
                                    teas.map(t => {
                                        return (t.category_id === c.id) && (
                                            <Wrapper key={t.id} pathImg="tea" item={t} />
                                        )
                                    })
                                }
                            </section>
                        )
                    })
                    :
                    null
            }
        </>
    )
}

export default Tea