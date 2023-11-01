import './cadastro.scss'

import Input from "../../components/login-cadastro/input/input";
import Button from "../../components/login-cadastro/button/button";
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return (

        <div className="cadastro-page">

            <main className="main-cadastro">

                <figure className="figure-cadastro"></figure>

                <section className="section-cadastro">

                    <section className="section-cadastro-form">

                        <h1 className="h1-cadastro">cadastro</h1>
                        <Input title="E-mail" type="text" />
                        <Input title="Nome de Usuário" type="text" />
                        <Input title="Senha" type="password" />
                        <Button action="Entrar" />
                        <Link className="a-cadastro" href="/login">Não possui conta? Cadastre-se aqui</Link>

                    </section>

                </section>

                <figure className="figure-cadastro figure-cadastro-2"></figure>

            </main>

        </div>

    )

}