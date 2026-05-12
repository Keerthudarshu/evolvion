import React from "react";
import Classes from "./ProjectsLoop.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Images are in 3:4 ratio for best fit
const projects = [
    { id: 1, src: "/projects/1.webp", href: "https://virtuososys.co/", alt: "E-commerce Project" },
    { id: 2, src: "/projects/2.webp", href: "https://virtuososys.co/", alt: "Healthcare Project" },
    { id: 3, src: "/projects/3.webp", href: "https://virtuososys.co/", alt: "E-Learning Project" },
    { id: 4, src: "/projects/4.webp", href: "https://virtuososys.co/", alt: "Real Estate Project" },
    { id: 5, src: "/projects/5.webp", href: "https://virtuososys.co/", alt: "Restaurant Project" },
    { id: 6, src: "/projects/6.webp", href: "https://virtuososys.co/", alt: "Social Media Project" },
    { id: 7, src: "/projects/7.webp", href: "https://virtuososys.co/", alt: "Logistics Project" },
    { id: 8, src: "/projects/8.webp", href: "https://virtuososys.co/", alt: "Gaming Project" },
];

// Duplicate to make the loop visually denser (like your old JS marquee)
const slides = [...projects, ...projects];

export default function ProjectsLoop({
    baseSpeed = 70,     // kept for API compatibility (not strictly needed)
    hoverFactor = 0.35, // no hover speed change anymore
}) {
    // Faster, constant ticker-style speed
    const SWIPER_SPEED = 3000; // ms per slide transition (tweak if needed)

    return (
        <div className={Classes.wrapper}>
            <div className={Classes.slider}>
                <Swiper
                    modules={[Autoplay]}
                    className={Classes.swiper}
                    loop={true}
                    loopedSlides={slides.length}
                    speed={SWIPER_SPEED}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    // IMPORTANT: they should not respond to drag / swipe
                    allowTouchMove={false}
                    simulateTouch={false}
                    grabCursor={false}
                    slidesPerView={2}
                    spaceBetween={0}
                    breakpoints={{
                        400: { slidesPerView: 3 },
                        481: { slidesPerView: 4 },
                        800: { slidesPerView: 5 },
                    }}
                >
                    {slides.map((project, index) => (
                        <SwiperSlide
                            key={`${project.id}-${index}`}
                            className={Classes.slideItem}
                        >
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className={Classes.slideLink}
                            >
                                <div className={Classes.imageWrapper}>
                                    <img
                                        src={project.src}
                                        alt={project.alt}
                                        className={Classes.image}
                                        loading="lazy"
                                        draggable={false}
                                    />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
