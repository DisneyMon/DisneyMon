import React from 'react';
import './treino2.scss';

const PikachuPage = () => {
    return (
        <>
            <header>
                <div className="container">
                    <a href="https://www.pokemon.com/br/">
                        <img src="/assets/images/poke-bola.png" alt="poke bola" />
                        <span>Pokemon</span>
                    </a>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="title">
                        <h1 className="title__text">Pikachu</h1>
                        <span className="title__transparent">Pikachu</span>
                    </div>
                    <div className="description">
                        <h2 className="description__title">Let's Go, Pikachu!</h2>
                        <p className="description__text">
                            Torne-se o melhor Treinador de Pokémon que puder, enquanto batalha outros Treinadores, Líderes de Ginásios e a sinistra Equipe Rocket.
                        </p>
                    </div>
                    <a href="#" className="action">
                        &#10515; Download
                    </a>
                </div>
            </main>
            <footer>
                <div className="container">
                    <p className="footer__text">
                        Copyright © 2022 | Fernando Leonid
                    </p>
                </div>
            </footer>
            <img className="pikachu-image" src="/assets/images/pikachu.png" alt="pikachu" />
        </>
    );
};

export default PikachuPage;
