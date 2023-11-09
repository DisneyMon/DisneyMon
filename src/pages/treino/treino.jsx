import './treino.scss'
import React from 'react';

import Section1 from '../../components/sections/section1/section1';
import Section2 from '../../components/sections/section2/section2';
import Section3 from '../../components/sections/section3/section3';

export default function Treino() {

    return (

        <div className="home-page">

            <section className="section-section1">

                <Section1 />

            </section>

            <section className="section-section2">

                <Section2 />

            </section>

            <section className='section-section3'>

                <Section3 />

            </section>

        </div>

    )

}