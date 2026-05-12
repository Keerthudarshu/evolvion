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
            name: "SSP Technologies",
            company: "CCTV & Security Systems",
            avatar: "/images/jake.webp",
            bg: "/images/reviewbg2.png",
            review:
                <div>
                    Virtuososys delivered our security systems website with exceptional attention to detail.
                    The team understood our industry perfectly and built a platform that truly represents our brand.
                </div>
        },
        {
            name: "Hello Colours",
            company: "Painting Agency",
            avatar: "/images/mcclain.webp",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    The team at Virtuososys built our painting agency website beautifully. They were responsive,
                    creative, and delivered exactly what we envisioned — on time and within budget.
                </div>,
        },
        {
            name: "Moira Building",
            company: "Hospital Website",
            avatar: "/images/ari.png",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Working with Virtuososys for our hospital website has been outstanding. Professional team,
                    premium code quality, and a smooth delivery process from start to finish.
                </div>,
        },
        {
            name: "Lovely Cocada",
            company: "UPVC Product Manufacturing",
            avatar: "/images/dimitris.webp",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Virtuososys built us a world-class product website at very competitive rates. Operating from
                    India, they brought global quality standards to our project with great results.
                </div>,
        },
        {
            name: "Evolt Training",
            company: "Multi Fitness Academy & Gym",
            avatar: "/images/parker.jpg",
            bg: "/images/reviewbg3.png",
            review:
                <div>
                    Our fitness academy website exceeded all expectations. The Virtuososys team customized
                    every feature for our specific needs and delivered a fast, beautiful, scalable platform.
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
                    What Our <span> Happy Clients </span> Say
                </h2>
                <p>
                    Our contented customers, who have experienced our exceptional quality and impeccable service, are a constant source of pride and motivation
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
