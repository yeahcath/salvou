import './button.css'

const Button = ({ text }) => {
    return (
        <button>
            <span className="button_top">{text}</span>
        </button>
    )


}

export default Button