import './input.scss';

export default function Input(props) {

    return (

        <div className="div-login-register">
            <h4 className="h4-login-register">{props.title}</h4>
            <input className="input-login-register" type={props.type} />
        </div>
    )

}