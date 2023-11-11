import React from 'react';
import './contato.scss';

const Contato = () => {
    return (

        <div className="contato-container">

            <header className='header-site-section1'>
                <nav>
                    <h1>
                        Logo
                    </h1>
                    <span>
                        <a href="/">Home</a>
                        <a href="/sobrenos">Sobre Nós</a>
                        <a href="/produtos">Produtos</a>
                        <a href="/contato">Contato</a>
                    </span>
                </nav>

            </header>

            <h1>Entre em Contato</h1>
            <p>
                Estamos aqui para ajudar! Entre em contato conosco para mais informações sobre nossos produtos da Disney e Pokémon.
            </p>
            <div className="informacoes-contato">
                <p>Email: contato@disneymon.com</p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Endereço: Rua Disney, 123 - Pokémonville</p>
            </div>
        </div>
    );
};

export default Contato;
