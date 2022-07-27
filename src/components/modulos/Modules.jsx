import { useEffect } from "react";
import Tittle from "../element/tittle";

const url = ""

const Modules = () => {

    const searchLink = async (tittle) => {
        const response = await fetch('${url}&s=${tittle}')
        const data = await response.json();

        console.log(dataSearch);
    }
    
    useEffect(() => {
        searchLink('');

    }, [])


    return (
        <div className="modules-container">
            <Tittle texto="O que você procura?">             
            </Tittle>

            <div className="modules-box">

                <div className="modules-link"
                onClick={() => {}}
                >
                    <h4
                    src={''}
                    ></h4>
                    <p>{''}</p>

                </div>

            </div>


        </div>
    )

   
}

export default Modules

