import Tittle from "../../element/tittle";
import './about.css'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <Tittle texto="Sobre" />
                <p>
                    Depois de perder meus favoritos salvos no navegador, percebi como é importante centralizar esses links em um só lugar e acessar quando e onde quiser, porque vamos combinar, eles realmente SALVAM quando estamos escrevendo nosso código. Pensando nisso, decidi criar uma plataforma que pudesse reunir os principais links sem perder muito tempo com procuras no buscador diante de tantas informações soltas na internet. O projeto consiste em uma plataforma de agrupamento de links úteis para desenvolvedoras front-end.
                </p>

            </div>
        </section>
    );
};

export default About