import React from 'react';
import Classes from './About.module.css';
// import TiltedCard from '../../../../components/Navbar/reactbits/Components/TiltedCard/TiltedCard';
// import useScreenWidth from '../../../../Hooks/useScreenWidth';
// import BottomToTop from '../../../../Animations/BottomToTop';
// import RoughText from '../../../../components/RoughText/RoughText';
import { useNavigate } from 'react-router-dom';

export default function About() {

    // const screenWidth = useScreenWidth();
    // const isMobile = screenWidth <= 768;

    const navigateTo = useNavigate();

    return (
        <section className={Classes.about} id='about-section' >
            <div className={Classes.container}>
                <h2>
                    Your 360° <span> IT Solutions </span> Partner
                </h2>
                <p>
                    With 100+ projects delivered across industries, we offer world-class web development, <br />
                    software testing, mobile apps and AI solutions at the most competitive rates
                </p>
            </div>

            {/* Middle/Features Section */}
            <div className={Classes.featuresSection}>

                <div className={Classes.projects}>
                    {/* {!isMobile ?
                        <TiltedCard
                            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Kendrick Lamar - GNX"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={10}
                            scaleOnHover={1.02}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            overlayContent={
                                <>
                                    <img src={'/images/project.png'} alt='projects background' draggable={false} className={Classes.card_inner_img} />
                                    <div className={Classes.projectsInner} >
                                        <h2>200+ Projects <br /> Launched</h2>
                                        <p>
                                            With over 200 successful projects, we bring experience,
                                            creativity, and reliability to every new website.
                                        </p>
                                        <button onClick={() => { navigateTo('/contact-us') }} > <h5>Get started now</h5> </button>
                                    </div>
                                </>
                            }
                        />
                        :
                        <> */}
                    <img src={'/images/project.png'} alt='projects background for mobile' draggable={false} className={Classes.card_inner_img} />
                    <div className={Classes.projectsInner} >
                        <h2>100+ Projects Launched</h2>
                        <p>
                            From startups to enterprises — we build web apps, mobile apps, automation and integration solutions tailored to your business needs.
                        </p>
                        <a href="https://virtuososys.co/" target="_blank" rel="noopener noreferrer">
                            <button> <h5>View our work</h5> </button>
                        </a>
                    </div>
                    {/* </>
                    } */}
                </div>

                <div className={Classes.featuresList}>
                    <div className={Classes.featureBox}>
                        <h3>Web & Mobile Development</h3>
                        <p>
                            We build complete web applications and mobile apps using ReactJS, Node.js,
                            Next.js, Flutter and more — crafted for performance and scalability.
                        </p>
                    </div>
                    <div className={`${Classes.featureBox}`}>
                        <h3>Software Testing & QA</h3>
                        <p>
                            Our dedicated QA teams perform quality verification across e-commerce,
                            healthcare, media and business solutions to the highest standards.
                        </p>
                    </div>
                    <div className={Classes.featureBox}>
                        <h3>Competitive Pricing</h3>
                        <p>
                            Operating from India, we offer world-class development at rates that
                            fit your budget — without compromising on code quality or delivery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
