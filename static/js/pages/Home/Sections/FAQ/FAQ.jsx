import React from 'react'
import Classes from './Faq.module.css'
// import RoughText from '../../../../components/RoughText/RoughText';
// import UnicornEmbed from '../../../../utils/Unicorn/UnicornEmbed';
import AccordionMUI from './AccordionMUI';
// import { useNavigate } from 'react-router-dom';

export default function FAQ() {
    // const scene = 'Ggdcljbxm4S0hpgogLbD'; //red
    // const scene = 'wBd76fLeefXdT5b7smRe'; //blue
    // const navigateTo = useNavigate();

    return (
        <section className={Classes.hero} id='faq-section' >
            <div className={Classes.container}>
                <h2>
                    Frequently Asked <span>Questions</span>
                    {/* <button className={Classes.exploreBtn} onClick={() => { navigateTo('/contact-us') }} >
                        <h5>Get in touch! {'->'}</h5>
                    </button> */}
                </h2>
                {/* <p>
                    With hundreds of websites completed, we bring a proven track record
                    of developing websites and delivering exceptional solutions for
                    clients across industries.
                </p> */}
            </div>
            <div className={Classes.grid} >
                {/* <div className={Classes.sceneCon} >
                    <UnicornEmbed projectId={scene} />
                </div> */}
                <div className={Classes.faqCon} >
                    <AccordionMUI />
                </div>
            </div>
        </section>
    )
}
