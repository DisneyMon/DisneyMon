import './button.scss'

export default function Button(props) {

    return (

        <div className="div-login-register">

            <button className="button-login-register">{props.action}</button>

        </div>

    )

}