import amelie from "../../assets/img/autres/amelie.jpg";
import xavier from "../../assets/img/autres/xavier.jpg";
import Wrapper from "./Components/Wrapper";
import IconOne from "./IconOne";
import Icons from "./Icons";

import Title from "../../Components/UI/Title/Index";

import {text} from "./text.js";

function About() {

    return (
        <main>
            <section>
                <Title level={2} title={"Notre équipe"}/>

                <Wrapper image={amelie} title={"Amélie, fondatrice de Cup of Tea"} text={text.amelie}/>
                <Wrapper image={xavier} title={"Xavier, fondateur de Cup of Tea"} text={text.xavier}/>
                <Wrapper image={amelie} title={"Jacquelina, assistante de direction"} text={text.jacqueline}/>
                                
            </section>

            <section>
                <Title level={2} title={"Notre concept"}/>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit voluptatem iste nemo rerum earum quod fuga ducimus
                    voluptatibus autem, voluptate reiciendis maiores voluptates
                    dignissimos eaque, cupiditate vero eos consequatur esse nisi
                    corporis maxime debitis. Illo, dolores. Recusandae ipsum
                    tempora id officia, laborum suscipit? Quidem tempora nihil,
                    enim harum placeat voluptate?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit voluptatem iste nemo rerum earum quod fuga ducimus
                    voluptatibus autem, voluptate reiciendis maiores voluptates
                    dignissimos eaque, cupiditate vero eos consequatur esse nisi
                    corporis maxime debitis. Illo, dolores. Recusandae ipsum
                    tempora id officia, laborum suscipit? Quidem tempora nihil,
                    enim harum placeat voluptate?
                </p>

                <aside>
                    <article>
                        <IconOne/>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos ea suscipit natus neque rerum recusandae
                            fuga quidem ducimus obcaecati eum.
                        </p>
                    </article>
                    <article>
                        <Icons dWhite="M37.344 1023.38c0-3.505-2.92-6.347-6.525-6.347-2.544 0-4.743 1.42-5.818 3.488-1.076-2.068-3.275-3.488-5.82-3.488-3.603 0-6.524 2.842-6.524 6.348 0 .02.003.04.004.06-.033.69-.009 7.383 12.339 14.395h.008c13.04-7.405 12.336-14.455 12.336-14.455z"/>
                        <h3>Dolor sit</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos ea suscipit natus neque rerum recusandae
                            fuga quidem ducimus obcaecati eum.
                        </p>
                    </article>
                    <article>
                        <Icons dWhite="M25 1014.62c-7.037 0-12.742 5.705-12.742 12.742 0 7.037 5.705 12.742 12.742 12.742 7.037 0 12.742-5.705 12.742-12.742 0-7.037-5.705-12.742-12.742-12.742zm4.814 7.47a2.333 2.333 0 011.764 3.858 2.325 2.325 0 00-3.529 0 2.334 2.334 0 011.764-3.858zm-9.628 0a2.334 2.334 0 011.765 3.858 2.327 2.327 0 00-3.529 0 2.334 2.334 0 011.764-3.858zm12.604 9.689a8.855 8.855 0 01-7.79 4.64 8.855 8.855 0 01-7.79-4.64.906.906 0 01.365-1.229c.44-.239 14.409-.239 14.85 0 .44.238.603.79.365 1.23z" />
                        <h3>Amet</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos ea suscipit natus neque rerum recusandae
                            fuga quidem ducimus obcaecati eum.
                        </p>
                    </article>
                </aside>
            </section>
        </main>
    );
}

export default About;
