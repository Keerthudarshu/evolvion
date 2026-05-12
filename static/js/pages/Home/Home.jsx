// Home.jsx
import React, { useEffect } from 'react';
import Classes from './Home.module.css';
import Hero from './Sections/Hero/Hero';
import About from './Sections/About/About';
import Reviews from './Sections/Reviews/Reviews';
import Services from './Sections/Services/Services';
import FAQ from './Sections/FAQ/FAQ';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const scrollToElement = (elementId, offset = 0) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop + offset;
            window.scroll({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const scrollInfo = location?.state?.scrollTo;
        if (!scrollInfo) return;

        const { id, offset = 0 } = scrollInfo;

        // ensure sections are mounted before scrolling
        requestAnimationFrame(() => {
            setTimeout(() => {
                scrollToElement(id, offset);
                // clear the state so it won't re-trigger on back/forward
                navigateTo(location.pathname, { replace: true, state: {} });
            }, 0);
        });
    }, [location.state, location.pathname, navigateTo]);

    return (
        <>
            <Helmet>
                <title>Evolvion | Evolving Ideas Into Custom Software</title>
                <meta
                    name="description"
                    content="Leading full-stack developers specializing custom website and mobile app solutions."
                />
                <meta
                    name="keywords"
                    content="Website Agency, Website Development Agency, Web Development, full stack, AI development, UI/UX Design, SEO Services, SaaS, Frontend Developer, AI chatbots, modern website"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://evolvion.io/" />
            </Helmet>

            <div className={Classes.pageWrapper}>
                <Hero />
                <About />
                <Services />
                <Reviews />
                {/* <PorfolioSection /> */}
                <FAQ />
            </div>
        </>
    );
}
