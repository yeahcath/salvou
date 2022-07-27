import './navbar.css';
import logo from './icon-s.png'

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
                            Sobre
                        </li>
                    </ul>
                    <ul>
                        <li className="menu-item">
                            Links uteis
                        </li>
                    </ul>
                    <ul>
                        <li className="menu-item">
                            Colabore
                        </li>
                    </ul>
                    

                </div>

            </div>

        </nav>


    )
}

export default Navbar