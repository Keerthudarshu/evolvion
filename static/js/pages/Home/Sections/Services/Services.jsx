import React from 'react'
import Classes from './Services.module.css'
import MyScrollingServices from './MyScrollingServices';
// import Orb from '../../../../components/Navbar/reactbits/Backgrounds/Orb/Orb';
// import RoughText from '../../../../components/RoughText/RoughText';

export default function Services() {

    return (
        <section className={Classes.service} id='services-section' >
            <div className={Classes.container}>
                <h2>
                    Complete <span> Website & Mobile App </span> Development
                </h2>
                <p>
                    We specialize in UI/UX design, front-end and back-end development, <br /> and cutting-edge AI/ML solutions
                </p>
            </div>

            <div className={Classes.slider} >
                <MyScrollingServices />
            </div>

        </section>
    )
}
