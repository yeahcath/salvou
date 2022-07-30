import { Link } from 'react-scroll'
import './header.css';
import ilustration from './person-computer.png'
import Button from '../../element/button/Button';


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-text">
                    <h1>SALVOU!</h1>
                    <p>Plataforma de agrupamentos de links para ajudar novas programadoras</p>
                    <Button Link activeClass="active" to="websites" spy={true} smooth={true} offset={50} duration={500} text="Se liga só!"/>
                </div>
                <div className="header-ilustration">
                    <img src={ilustration} alt="ilustraçao de ? "></img>
                </div>
            </header>
        </>
    )
}

export default Header 