import './button.css'
import { Link } from 'react-scroll'

const Button = ({ text }) => {
    return (
        <button>
            <Link activeClass="active" to="websites" spy={true} smooth={true} offset={50} duration={500} className="button_top">{text}</Link>
        </button>
    )


}

export default Button