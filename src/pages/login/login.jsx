import React from 'react';
import './login.scss';

export default function Login() {
    return (

        <body className="login-page">

            <main className="main-login">

                <figure className="figure-login"></figure>

                <section className="section-login">

                    <section className="section-login-form">

                        <h1 className="h1-login">Login</h1>
                        <h4 className="h4-login">E-mail</h4>
                        <input className="input-login" type="text" />
                        <h4 className="h4-login">Senha</h4>
                        <input className="input-login" type="password" />
                        <button className="button-login-register">Entrar</button>
                        <a className="a-login" href="/">Não possui conta? Cadastre-se aqui</a>

                    </section>

                </section>

                <figure className="figure-login figure-login-2"></figure>

            </main>

        </body>
    );

}
