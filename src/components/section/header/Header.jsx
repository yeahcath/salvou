import './header.css';
import ilustration from './person-computer.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-text">
                    <h1>Salvou</h1>
                    <p>Plataforma de agrupamentos de links para ajudar novas programadoras</p>
                    <button>Veja</button>
                </div>
                <div className="header-ilustration">
                    <img src={ilustration} alt="ilustraçao de ? "></img>
                </div>
            </header>
        </>
    )
}

export default Header 