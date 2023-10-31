import React from 'react';
import './login.scss';

import Input from "../../components/login-cadastro/input/input";
import Button from "../../components/login-cadastro/button/button";
import { Link } from 'react-router-dom';

export default function Login() {
    return (

        <div className="login-page">

            <main className="main-login">

                <figure className="figure-login"></figure>

                <section className="section-login">

                    <section className="section-login-form">

                        <h1 className="h1-login">Login</h1>
                        <Input title="E-mail" type="text"/>
                        <Input title="Senha" type="password"/>
                        <Button action="Entrar"/>
                        <Link className="a-login" href="/cadastro">Não possui conta? Cadastre-se aqui</Link>

                    </section>

                </section>

                <figure className="figure-login figure-login-2"></figure>

            </main>

        </div>
    );

}
