import './card.scss';

export default function Card() {

    return (

        <section className='section-card'>

            <section className='section-card-button'>

                <button className='buttom-card'>Comprar</button>

            </section>

            <figure className='figure-card'>

                <img className='img-card img-card-pelucia' src="/assets/images/site/pelucia.webp" alt="Foto Boneco de Pelucia Pikachu" />

            </figure>

            <article className='article-card'>

                <p className='p-card'>Pokémon - Pelúcia De 20 Cm - Pikachu</p>

                <h1 className='h1-card'>R$ 169,99</h1>

                <p className='p-card'><strong>R$ 161,49</strong> à vista com desconto</p>

            </article>

        </section>

    )

}