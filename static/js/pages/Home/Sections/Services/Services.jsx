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
                    Complete <span> IT Services </span> Under One Roof
                </h2>
                <p>
                    From web development and software testing to mobile apps, <br /> AI development and technical training — we do it all
                </p>
            </div>

            <div className={Classes.slider} >
                <MyScrollingServices />
            </div>

        </section>
    )
}
