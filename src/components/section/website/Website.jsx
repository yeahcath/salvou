import websites from "../../../data";
import Tittle from "../../element/tittle/Tittle";
import './website.css'

function Websites() {
    return (

        <section className="card-section" id="main">
            <div className="card-container">
                <Tittle texto="O que você procura?" />
                <div className="card-box">
                    {websites.map((website) => {
                        return (
                            <div key={website.id} className="card">
                                <div className="card-details">
                                    <p className="text-title">{website.tittle}</p>
                                    <p className="text-body">{website.description}</p>

                                    <a href={website.link} target="blank">
                                        <button class="card-button">Ir!</button>
                                    </a>                                   
                                  
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Websites;