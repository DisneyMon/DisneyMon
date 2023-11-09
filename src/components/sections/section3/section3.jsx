import './section3.scss';
import Card from '../../site/card/card.jsx';

export default function Section3() {

    return (

        <div className="section3">

            <figure className="figure-section3">
                <img className="img-section3 img-section3-logo"  src="/assets/images/sections/section3/logo-section3.png" alt="Logo Walt Disney" />
            </figure>

            <section className='section-section3-texto-img'>

                <figure className="figure-section3-imgs">
                    <img className='img-section3-disney img-section3-elvis' src="/assets/images/sections/section3/elvis-section3.gif" alt="GIF lilo stitch Elvis" />
                </figure>

                <p className="p-section3">
                The Walt Disney Company, mais conhecida apenas como Disney, é o maior conglomerado de mídia do mundo. A companhia foi fundada em 1923 pelos irmãos Walt Disney e Roy Oliver Disney, tendo como especialidade as animações, mas ao longo dos anos a marca se expandiu para múltiplas áreas do entretenimento.
A companhia começou a ganhar fôlego com a criação daquele que seria o maior símbolo da Disney: o mascote Mickey Mouse. Criado em 1928, ele estrelou o curta Plane Crazy antes de protagonizar Steamboat Willie, o primeiro desenho animado sonorizado da empresa, e que foi um sucesso absoluto.
A empresa cresceu ao longo dos anos seguintes, com o lançamento de animações consagradas, como Branca de Neve e os Sete Anões, Pinóquio, Fantasia, Dumbo, Bambi, Cinderela e Alice no País das Maravilhas.
                </p>

                <figure className="figure-section3-imgs">
                    <img className='img-section3-disney img-section3-mickey' src="/assets/images/sections/section3/mickey-section3.gif" alt="GIF Mickey" />
                </figure>

            </section>

            <h1 className='h1-produtos'>Conheça nossos produtos</h1>

            <section className='section-section3-cards'>

                {/* > 1250px Tamanho normal com 3 cards*/}
                <section className='section-section3-cards-container'>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>

                {/* < 1250px && > 900 tamanho com 2 cards*/}
                <section className='section-section3-cards-container section-section3-cards-container-2cards'>
                    <Card/>
                    <Card/>
                </section>

                <section className='section-section3-cards-container section-section3-cards-container-1card'>
                    <Card/>
                </section>

            </section>

        </div>

    )

}