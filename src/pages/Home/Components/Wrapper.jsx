import Title from "../../../Components/UI/Title/Index";
import Button from "../../../Components/UI/Button/Index";
import FromPrice from "../../../Components/UI/Text/FromPrice";

function Wrapper({pathImg, item, title, detail}) {
    
    if(detail) { // partie div ligne 57 du composant Home
        return (
            <article>
                <Title title={title} level={2}/>
                {
                    !item ? <p>Pas encore de vente 😒😒😭😭😭</p>
                    :
                    <>
                    <figure>
                        <img src={`/img/${pathImg}/${item.url_img}`} alt="" />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                
                    <p>{item.description}</p>

                    <FromPrice item={item} />

                    <Button id={item.id}>voir ce produit</Button>
                    </>
                }
            </article>
        )
    } else { // section ligne 48 composant Home
        return (
            <figure>
                <img src={`/img/${pathImg}/${item.url_img}`} alt="" />
                <figcaption>{item.title}</figcaption>
            </figure>
        )
    }
}

export default Wrapper;
