import { useState, useEffect } from 'react'
import Tittle from '../../element/tittle/Tittle'


const Modules = () => {

    const [modules, setModules] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setModules(data.results))
        
    }, [])
    

    return(
        
        <div className="modulos-container" id="#modulos">
            <Tittle texto="O que você procura?" />
            {modules.map(objeto => {
                return (
                    <div key={objeto.id}>
                        <h4>{objeto.name}</h4>
                        <img src={objeto.image} alt ={objeto.name}/>
                    </div>
                )
            })}            
        </div>
    )

   
}

export default Modules

