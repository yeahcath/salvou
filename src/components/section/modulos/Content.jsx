import { useState, useEffect } from 'react'
import Tittle from '../../element/tittle/Tittle'
import './content.css'


const Content = () => {

    const [conteudo, setConteudo] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/yeahcath/linkapi')
        .then(response => response.json())
        .then(data => setConteudo(data.results))
        
    }, [])    

    return(
        
        <div className="modulos-container" id="modulos">
            <Tittle texto="O que você procura?" />
            <div className="card">
                {conteudo.map(objeto => {
                    return (
                        <article key={objeto.id}>
                            <h3>Nome: {objeto.tittle}</h3>
                            <p>Link: {objeto.link}</p>                            
                        </article>
                    )
                })}  
            </div>
          
        </div>
    )

   
}

export default Content
