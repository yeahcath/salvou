import './navbar.css';
import { Link } from 'react-scroll'
import logo from './img/icon-s.png'

const Navbar = () => {
    return (

        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo} className="nav-logo" ></img>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >Sobre</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="menu-item">
                            <Link activeClass="active" to="websites" spy={true} smooth={true} offset={50} duration={500}>Links úteis</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="menu-item">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contato</Link>
                        </li>
                    </ul>


                </div>

            </div>

        </nav>


    )
}

export default Navbar