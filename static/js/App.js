import {
    lazy,
    Suspense
} from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import './App.css';

// Always-needed — keep eager
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BottomToTop from './Animations/BottomToTop';
import {
    ScrollToTop
} from './Hooks/usePreventScrolling';
import {
    HelmetProvider
} from 'react-helmet-async';
import {
    Analytics
} from "@vercel/analytics/react";
import {
    SpeedInsights
} from "@vercel/speed-insights/react";

// Lazy — each page gets its own chunk, only parsed when visited
const Home = lazy(() =>
    import ('./pages/Home/Home'));
const Portfolio = lazy(() =>
    import ('./pages/Portfolio/Portfolio'));
const ContactUs = lazy(() =>
    import ('./pages/ContactUs/ContactUs'));
const PrivacyPolicy = lazy(() =>
    import ('./pages/PrivacyPolicy/PrivacyPolicy'));
const TermsOfService = lazy(() =>
    import ('./pages/TermsOfService/TermsOfService'));

function App() {
    return ( <
        HelmetProvider >
        <
        div className = "app-shell" >
        <
        ScrollToTop / >

        <
        BottomToTop fromY = {
            40
        }
        delay = {
            0
        }
        duration = {
            0.35
        } >
        <
        Navbar / >
        <
        /BottomToTop>

        <
        main className = "app-main" > { /* Suspense fallback is invisible — background matches your page bg */ } <
        Suspense fallback = { < div style = {
                {
                    minHeight: '100vh',
                    background: '#010915'
                }
            }
            />}> <
            Routes >
            <
            Route path = "/"
            element = { < Home / >
            }
            />

            <
            Route path = "/portfolio"
            element = { < Portfolio / >
            }
            /> <
            Route path = "/portfolio/:slug"
            element = { < Portfolio / >
            }
            />

            <
            Route path = "/contact-us"
            element = { < ContactUs / >
            }
            /> <
            Route path = "/privacy-policy"
            element = { < PrivacyPolicy / >
            }
            /> <
            Route path = "/terms-of-use"
            element = { < TermsOfService / >
            }
            />

            <
            Route path = "*"
            element = { < Home / >
            }
            /> <
            /Routes> <
            /Suspense> <
            /main>

            <
            Footer / >
            <
            /div>

            <
            Analytics / >
            <
            SpeedInsights / >
            <
            /HelmetProvider>
        );
    }

    export default App;