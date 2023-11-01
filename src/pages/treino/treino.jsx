import './treino.scss'
import React from 'react';

import Section1 from '../../components/sections/section1/section1';
import Section2 from '../../components/sections/section2/section2';

export default function Treino() {

    return (

        <div className="home-page">

            <section className="section-section1">

                <Section1 />

            </section>

            <section className="section-section2">

                <Section2 />

            </section>

        </div>

    )

}