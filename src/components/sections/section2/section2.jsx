import './section2.scss'
import Card from '../../site/card/card.jsx';

export default function Section2() {

    return (

        <div className="section2">

            <figure className="figure-section2">
                <img className="img-section2 img-section2-logo"  src="/assets/images/sections/section2/logopokemon-section2.png" alt="Logo Pokémon" />
            </figure>

            <section className='section-section2-texto-img'>

                <figure className="figure-section2-imgs">
                    <img className='img-section2-pokemon img-section2-pikachu' src="/assets/images/sections/section2/picachu-section2.gif" alt="GIF Pikachu" />
                </figure>

                <p className="p-section2">
                    Pokémon é uma franquia de jogos eletrônicos desenvolvida pela empresa japonesa Game Freak em parceria com a Nintendo. O primeiro game foi lançado em 1996 e desde então a marca se tornou um fenômeno de popularidade.
                    Os jogos são ambientados em continentes fictícios onde os players assumem o papel de treinadores de criaturas mágicas conhecidas como Pokémon.
                    Cada monstrinho possui habilidades únicas – e os jogadores precisam treiná-los e desenvolvê-los para participar de batalhas contra outros treinadores.
                    Os games da série principal se encaixam no gênero RPG. Os duelos ocorrem em turnos, isto é, cada rodada uma criatura executa um movimento. Essas ações podem ser ofensivas ou defensivas. Tudo depende da estratégia do player.
                </p>

                <figure className="figure-section2-imgs">
                    <img className='img-section2-pokemon img-section2-mewtwo' src="/assets/images/sections/section2/mewtwo-section2.gif" alt="GIF Mewtwo" />
                </figure>

            </section>

            <h1 className='h1-produtos'>Conheça nossos produtos</h1>

            <section className='section-section2-cards'>

                <div className='div-section2-area-bolinha'>
                    <div className='div-section2-bolinha'>
                        <div className='div-section2-seta div-section2-seta-esquerda'></div>
                    </div>
                </div>

                {/* > 1250px Tamanho normal com 3 cards*/}
                <section className='section-section2-cards-container'>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>

                {/* < 1250px && > 900 tamanho com 2 cards*/}
                <section className='section-section2-cards-container section-section2-cards-container-2cards'>
                    <Card/>
                    <Card/>
                </section>

                <section className='section-section2-cards-container section-section2-cards-container-1card'>
                    <Card/>
                </section>

                <div className='div-section2-area-bolinha'>
                    <div className='div-section2-bolinha'>
                        <div className='div-section2-seta div-section2-seta-direita'></div>
                    </div>
                </div>

            </section>

        </div>

    )

}