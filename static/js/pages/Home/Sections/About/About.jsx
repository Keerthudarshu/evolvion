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
                    Experienced <span> Full-Stack </span> Developers
                </h2>
                <p>
                    With 200+ projects delivered, we offer fast, reliable mobile app and web <br />
                    development and unlimited revisions to bring your vision to life
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
                        <h2>200+ Projects Launched</h2>
                        <p>
                            With over 200 projects delivered, we build fast and reliable web and mobile apps complete with scalable architecture and unlimited revisions.                        </p>
                        <button onClick={() => { navigateTo('/portfolio') }}  > <h5>View our portfolio</h5> </button>
                    </div>
                    {/* </>
                    } */}
                </div>

                <div className={Classes.featuresList}>
                    <div className={Classes.featureBox}>
                        <h3>Full-Stack Development</h3>
                        <p>
                            We build complete solutions from design to development and AI/ML, backed by a
                            proven track record of creating high-performing and impactful apps and websites.
                        </p>
                    </div>
                    <div className={`${Classes.featureBox}`}>
                        <h3>Quick Delivery</h3>
                        <p>
                            With over a decade of experience, we deliver innovative, scalable designs
                            and apps that balance quality, speed, and customer satisfaction.
                        </p>
                    </div>
                    <div className={Classes.featureBox}>
                        <h3>Unlimited Revisions</h3>
                        <p>
                            We offer unlimited revisions and dedicated support to ensure your
                            website or app matches your vision down to every detail.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
