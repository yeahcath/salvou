import { useState, useEffect } from 'react';
import Tittle from '../../element/tittle/Tittle';
import './content.css'


const Content = () => {

    const [contents, setContents] = useState([])

    useEffect(() => {
        fetch('./data.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(response => response.json()).then(response => setContents(response.contents))


    }, [])

    return (
        <div className="card-container">
            <Tittle texto="O que você procura?" />
            {contents.map((content) => {
                return (
                    <div key={content.id} className="card">

                        <h4>{content.tittle}</h4>
                        <a href={content.link}>{content.description}</a>
                        <p>{content.tag}</p>

                    </div>
                )
            })}
        </div>
    )






   





}
export default Content
