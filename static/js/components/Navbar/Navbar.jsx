import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Classes from './Navbar.module.css';
import Logo from '../Logo/Logo';
import useScreenWidth from '../../Hooks/useScreenWidth';
import { scrollToElement } from '../../utils/scrollToElement';

export default function Navbar() {
    // Track scroll state
    const [scrolled, setScrolled] = useState(false || window.innerWidth < 480);
    // Track the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update scroll state based on window.scrollY
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update windowWidth on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navigateTo = useNavigate();
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location.pathname]);

    const handleNavigate = (page) => {
        navigateTo(page);
    };

    // This function returns a margin value based on window width and scroll state.
    const getMargin = () => {
        // You can adjust these breakpoints and margin values as needed.
        if (windowWidth < 700) {
            // For devices with width less than 1000px:
            return scrolled ? '10px 5%' : '10px 5%';
        } else if (windowWidth < 1000) {
            return scrolled ? '10px 12%' : '10px 5%';
        } else if (windowWidth < 1200) {
            // For devices with width between 1000px and 1200px:
            return scrolled ? '10px 20%' : '10px 5%';
        } else {
            // For devices with width 1200px and above:
            return scrolled ? '10px 25%' : '10px 7%';
        }
    };

    const isMobile = useScreenWidth() < 480;

    const handleScrollOrNavigate = (id, offset = 0) => {
        if (location.pathname !== '/') {
            navigateTo('/', { state: { scrollTo: { id, offset } } });
        } else {
            scrollToElement(id, offset);
        }
    };

    return (
        <motion.div
            className={Classes.navbar}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                margin: getMargin(),
                padding: isMobile || scrolled ? '0 30px' : '0',
                backdropFilter: isMobile || scrolled ? 'blur(24px)' : 'none',
                backgroundColor: isMobile || scrolled ? '#00000080' : 'rgba(0, 0, 0, 0)',
                borderRadius: isMobile || scrolled ? '40px' : '0',
                boxShadow: isMobile || scrolled
                    ? 'rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px'
                    : 'none',
                transform: 'none',
                transformOrigin: '50% 50% 0px',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className={Classes.gridLeft} >
                <a href="/" >
                    <motion.div
                        animate={{ height: isMobile || scrolled ? '2rem' : '2.2rem' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Logo />
                    </motion.div>
                </a>
            </div>
            <ul>
                <li
                    className={activePage === '/' ? Classes.navActive : ''}
                >
                    <a href="/">
                        <h5>Home</h5>
                    </a>
                </li>
                <li
                    onClick={() => handleScrollOrNavigate('about-section', -120)}
                    style={{ display: windowWidth < 600 ? 'none' : '' }}
                >
                    <h5>About Us</h5>
                </li>
                <li
                    onClick={() => handleScrollOrNavigate('services-section', -30)}
                    style={{ display: windowWidth < 400 ? 'none' : '' }}
                >
                    <h5>Services</h5>
                </li>
                <li
                    onClick={() => handleScrollOrNavigate('faq-section', 0)}
                    style={{ display: windowWidth < 600 ? 'none' : '' }}
                >
                    <h5>FAQ</h5>
                </li>
                <li
                    onClick={() => handleNavigate('/portfolio')}
                    className={activePage === '/portfolio' ? Classes.navActive : ''}
                >
                    <h5>Portfolio</h5>
                </li>
                {/* <li
                    onClick={() => handleNavigate('/contact-us')}
                    className={activePage === '/contact-us' ? Classes.navActive : ''}
                >
                    <h5> {isMobile ? 'Contact' : 'Your Project Details'} </h5>
                </li> */}
            </ul>
            <div className={Classes.gridRight}>
                {/* <a
                    href="https://cal.com/evolvion/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                > */}
                <button className={Classes.quoteBtn} onClick={() => handleNavigate('/contact-us')}>
                    <h5> {isMobile ? 'Quote' : `Get a quote`} </h5>
                </button>
                {/* </a> */}
            </div>
        </motion.div>
    );
}
