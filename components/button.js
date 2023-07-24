import style from "../styles/Button.module.scss"

const Button = (props) =>{
    return(
        <a className={props.variant ? style.btn1 : style.btn2}>{props.text}</a>
    )
}

export default Button