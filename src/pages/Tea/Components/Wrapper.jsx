import Title from "../../../Components/UI/Title/Index";
import Button from "../../../Components/UI/Button/Index";
import FromPrice from "../../../Components/UI/Text/FromPrice";

function Wrapper({pathImg, item}) {      
    return (
        <article>
            <Title title={item.mainTitle} level={3}/>
            {
                !item ? <p>Pas encore de vente 😒😒😭😭😭</p>
                :
                <>
                    <figure>
                        <img src={`/img/${pathImg}/${item.url_img}`} alt={item.image_alt} />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                
                    {/* <p>{item.description}</p> */}

                    <FromPrice item={item} />
                    

                    <Button id={item.id}>voir ce produit</Button>
                </>
            }
        </article>
    )
}

export default Wrapper;
