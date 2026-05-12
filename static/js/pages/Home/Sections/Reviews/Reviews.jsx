import React, { useState } from "react";
import Classes from "./Reviews.module.css";
import SpotlightCard from "../../../../components/Navbar/reactbits/Components/SpotlightCard/SpotlightCard";

// Import AnimatePresence & motion
import { AnimatePresence, motion } from "framer-motion";
// import RoughText from "../../../../components/RoughText/RoughText";

export default function Reviews() {
    // Example review data
    const reviewsData = [
        {
            name: "Jake Marine",
            company: "Founder at Anchorize",
            avatar: "/images/jake.webp",
            bg: "/images/reviewbg2.png",
            review:
                <div>
                    I wanted to thank Evolvion.io for all of the amazing work your team did in such a short amount of time.
                    The attention to detail, UI/UX...<a href="https://www.linkedin.com/feed/update/urn:li:activity:7336785375874469889" target="_blank" rel="noreferrer" style={{ color: '#a365ff' }} >View More</a>
                </div>
        },
        {
            name: "McClain Strelow",
            company: "CEO at FuelClubs",
            avatar: "/images/mcclain.webp",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Evolvion did an incredible job building my FuelClubs app. They listened to every idea, offered
                    thoughtful recommendations...<a href="https://www.linkedin.com/feed/update/urn:li:activity:7396245250484183040/" target="_blank" rel="noreferrer" style={{ color: '#a365ff' }} >View More</a>
                </div>,
        },
        {
            name: "Ari Rosen",
            company: "CEO at Mentr",
            avatar: "/images/ari.png",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Working with Evolvion has been an incredible experience. They were responsive, detail-oriented,
                    and professional from start to...<a href="https://www.linkedin.com/feed/update/urn:li:activity:7390036306468237313/" target="_blank" rel="noreferrer" style={{ color: '#a365ff' }} >View More</a>
                </div>,
        },
        {
            name: "Dimitris Karras",
            company: "CEO at LightTrack",
            avatar: "/images/dimitris.webp",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Working with Evolvion has been exceptional from start to finish. They offered an unbeatable quote,
                    provided full support...<a href="https://www.linkedin.com/feed/update/urn:li:activity:7396204674724417536/" target="_blank" rel="noreferrer" style={{ color: '#a365ff' }} >View More</a>
                </div>,
        },
        {
            name: "Parker Newman",
            company: "CEO at SignWell",
            avatar: "/images/parker.jpg",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Evolvion.io has gone above and beyond our expectations and delivered a <span style={{ whiteSpace: "nowrap" }}> first class </span>
                    product at a fraction of the price...<a href="https://www.linkedin.com/feed/update/urn:li:activity:7366477912671166464/" target="_blank" rel="noreferrer" style={{ color: '#a365ff' }} >View More</a>
                </div>,
        },
    ];

    // 1) If there are exactly 3 reviews, duplicate them so we can loop
    let displayedReviews = reviewsData;
    if (reviewsData.length === 3) {
        displayedReviews = [...reviewsData, ...reviewsData]; // total 6
    }

    // 2) 3 reviews per slide
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(displayedReviews.length / itemsPerSlide);

    // 3) Current slide index [0 .. totalSlides - 1]
    const [currentSlide, setCurrentSlide] = useState(0);

    // For standard "non-wrapping" behavior, we clamp slides between 0 and totalSlides - 1
    const goToPrev = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
    };

    // 4) Slice the 3 reviews for the current slide
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const currentItems = displayedReviews.slice(startIndex, endIndex);

    // The per-card delay array: Card 1 = 0.05s, Card 2 = 0.15s, Card 3 = 0.2s
    const delayMap = [0.05, 0.15, 0.2];

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalSlides - 1;

    return (
        <section className={Classes.hero} id="reviews-section" >
            <div className={Classes.container}>
                <h2>
                    What Some of <span> Our Clients </span> Say
                </h2>
                <p>
                    With hundreds of web and mobile projects completed, we deliver proven, high-quality solutions for clients across every industry
                </p>

                {/* Carousel area */}
                <div className={Classes.carousel}>
                    {/* AnimatePresence to handle enter/exit animations */}
                    <AnimatePresence mode="wait">
                        {currentItems.map((review, idx) => {
                            // Retrieve delay from our delayMap
                            const delay = delayMap[idx] || 0.1;

                            return (
                                <motion.div
                                    // Combine currentSlide + idx for a unique key
                                    key={`${currentSlide}-${idx}`}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    transition={{
                                        delay,
                                        duration: 0.3,
                                    }}
                                    style={{ display: "inline-block" }}
                                >
                                    <SpotlightCard
                                        className="custom-spotlight-card"
                                        spotlightColor="rgb(225, 187, 251, 0.2)"
                                    >
                                        <div className={Classes.card}>
                                            <div className={Classes.profile}>
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className={Classes.avatar}
                                                    draggable={false}
                                                />
                                                <div>
                                                    <h4>{review.name}</h4>
                                                    <span>{review.company}</span>
                                                </div>
                                            </div>

                                            <div className={Classes.quoteMark}>&#10077;</div>

                                            <p className={Classes.reviewText}>{review.review} </p>
                                            <div className={Classes.cardBottom}>
                                                {/* <img src={review.bg} alt="card background" /> */}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation arrows */}
                <div className={Classes.btnWrapper}>
                    {/* Prev Button */}
                    <button
                        onClick={goToPrev}
                        disabled={isPrevDisabled}
                        style={{
                            opacity: isPrevDisabled ? 0.5 : 1,
                        }}
                    >
                        <svg
                            style={{ transform: "rotate(180deg)" }}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M5 12H19"
                                stroke="#8F9BB7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 5L19 12L12 19"
                                stroke="#8F9BB7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        disabled={isNextDisabled}
                        style={{
                            opacity: isNextDisabled ? 0.5 : 1,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 12H19"
                                stroke="#8F9BB7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 5L19 12L12 19"
                                stroke="#8F9BB7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section >
    );
}
