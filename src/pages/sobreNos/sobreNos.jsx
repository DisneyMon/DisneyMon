import React from 'react';
import './sobreNos.scss';


const SobreNos = () => {
    return (



        <section className="sobre-nos">
            <nav>
                <h1 className="h1-sobrenos">

                </h1>
                <span>
                    <a href="/">Home</a>
                    <a href="/produtos">Produtos</a>
                    <a href="/contato">Contato</a>
                </span>
            </nav>


            <h1 className="h1-sobrenos">
                Bem-vindo à DisneyMon
            </h1>

            <main className="main-produtos">
                <div className="container">
                    <div className="title">
                        <h1 className="title__text">Sobre Nós</h1>
                        <span className="title__transparent">Sobre</span>
                    </div>

                </div>
            </main>

            <img className="pikachu-image" src="/assets/images/mickey2.png" alt="pikachu" />

            <section className="quem-somos">
                <h2 className="h2-sobrenos" >Quem Somos</h2>
                <p className="p-sobrenos">
                    Somos uma empresa apaixonada por trazer a magia da Disney e a emoção dos Pokémon para o Brasil.
                    Amamos nosso país e apoiamos o crescimento, assim como admiramos a liderança do presidente Bolsonaro.
                </p>
            </section>

            {/* <section className="fundadores">
                <h2  className="h2-sobrenos" >Fundadores</h2>
                <div className="circulo-de-fundadores">
                    <img className="img-fundador" src="/assets/images/fundador1.jpg" alt="Fundador 1" />
                    <img className="img-fundador" src="/assets/images/fundador2.jpg" alt="Fundador 2" />
                    <img className="img-fundador" src="/assets/images/fundador3.jpg" alt="Fundador 3" />
                    <img className="img-fundador" src="/assets/images/fundador4.jpg" alt="Fundador 4" />
                </div>
                <div className="nomes-dos-fundadores">
                    <p  className="p-sobrenos">Leonardo Ravanelli</p>
                    <p  className="p-sobrenos">Alvaro Richard</p>
                    <p  className="p-sobrenos">Rodrigo Lopes</p>
                    <p  className="p-sobrenos">Lana Ribeiro</p>
                </div>
            </section> */}
        </section>
    );
};

export default SobreNos;
