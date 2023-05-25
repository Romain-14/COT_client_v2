import Title from "../../../Components/UI/Title/Index";

import Text from "./Text";

function Wrapper({title, image, text}) {

    return (
        <article>
            <Title level={3} title={title}/>
            
            <img src={image} alt="" />
            {
                Object.values(text).map((t, index) => {
                    return <Text text={t} key={index}/> 
                })
            }
            
        </article>
    );
}

export default Wrapper;
