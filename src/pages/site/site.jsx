import React from 'react';
import './site.scss';

import Card from '../../components/site/card/card';

export default function Site() {
    return (

        <div className='site-page'>
            <header className='header-site-section1'>
                <img className='img-site-section img-site-section1-aleatoria' src="/assets/images" alt="" />

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
            <section class="background" id="background">


            </section>

            <div className='pokemon' >
                <img className="img-site-pokemon" src="/assets/images/site/pokemon.png" alt="" />
            </div>

            <section class="About">

                <div class="content-container">
                    <img className='img-site-section img-site-section3-picachu' src="/assets/images/site/picachu.gif" alt="" />

                    <div className='paragrafo-site'>
                        <p> Pokémon é uma franquia de jogos eletrônicos desenvolvida pela empresa japonesa Game Freak em parceria com a Nintendo. O primeiro game foi lançado em 1996 e desde então a marca se tornou um fenômeno de popularidade.
                            Os jogos são ambientados em continentes fictícios onde os players assumem o papel de treinadores de criaturas mágicas conhecidas como Pokémon.
                            Cada monstrinho possui habilidades únicas – e os jogadores precisam treiná-los e desenvolvê-los para participar de batalhas contra outros treinadores.
                            Os games da série principal se encaixam no gênero RPG. Os duelos ocorrem em turnos, isto é, cada rodada uma criatura executa um movimento. Essas ações podem ser ofensivas ou defensivas. Tudo depende da estratégia do player
                            .</p>
                    </div>

                    <img className='img-site-section img-site-section2-rosinha' src="/assets/images/site/rosinha.gif" alt="" />

                </div>

                <h3 class="h3-conheca-produtos">Conheça Nossos Produtos</h3>

            </section>

            
            <section class="conheca-os-produtos">
                

                <Card/>
                <Card/>
                <Card/>

            </section>


            <section class="About-disney">

                <div class="content-container">

                    <div className='paragrafo-site'>
                        <p> The Walt Disney Company, mais conhecida apenas como Disney, é o maior conglomerado de mídia do mundo. A companhia foi fundada em 1923 pelos irmãos Walt Disney e Roy Oliver Disney, tendo como especialidade as animações, mas ao longo dos anos a marca se expandiu para múltiplas áreas do entretenimento.
                            A companhia começou a ganhar fôlego com a criação daquele que seria o maior símbolo da Disney: o mascote Mickey Mouse. Criado em 1928, ele estrelou o curta Plane Crazy antes de protagonizar Steamboat Willie, o primeiro desenho animado sonorizado da empresa, e que foi um sucesso absoluto.
                            A empresa cresceu ao longo dos anos seguintes, com o lançamento de animações consagradas, como Branca de Neve e os Sete Anões, Pinóquio, Fantasia, Dumbo, Bambi, Cinderela e Alice no País das Maravilhas.</p>
                    </div>

                </div>

            </section>

            <section class="conheca-os-produtos-disney">
                <h3 class="h3-conheca-produtos-disney">Conheça Nossos Produtos</h3>

                <div class="card-container">
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="/assets/images/site/pelucia.webp" alt="pelúcia" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Pokémon - Pelúcia De 20 Cm - Pikachu</h2>
                            <p>R$ 169,99</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="/assets/images/site/pelucia.webp" alt="pelúcia" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Pokémon - Pelúcia De 20 Cm - Pikachu</h2>
                            <p>R$ 169,99</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="/assets/images/site/pelucia.webp" alt="pelúcia" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Pokémon - Pelúcia De 20 Cm - Pikachu</h2>
                            <p>R$ 169,99</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>









            <footer className="footer-site">
                <aside>
                
                    <p>DisneyMon © 2023 - Lana, Leonardo, Alvaro e Rodrigo.</p>
                </aside>
                <nav >
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.890-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.070 1.623-4.678 2.348-7.290 2.040 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.230 0-3.897.266-4.356 2.620-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.600.245 11.626.246 15.230 0 3.897-.266 4.356-2.620 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v-3.385z"></path></svg></a>
                </nav>
            </footer>





            <script src="main.js"></script>
        </div>






    );
}