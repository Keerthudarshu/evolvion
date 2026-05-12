"use strict";
(self.webpackChunkevolvion = self.webpackChunkevolvion || []).push([
    [760], {
        5342: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => V
            });
            var i = n(5043);
            const r = {},
                o = {
                    hero: "Hero_hero__cRnqg",
                    main: "Hero_main__A3Z5p",
                    content: "Hero_content__Uq1XP",
                    LeftBgGradient: "Hero_LeftBgGradient__psMpf",
                    RightBgGradient: "Hero_RightBgGradient__bAyYa",
                    miniBanner: "Hero_miniBanner__W566C",
                    miniBannerShine: "Hero_miniBannerShine__5E8QP",
                    headingCon: "Hero_headingCon__m5Znk",
                    subHeadingCon: "Hero_subHeadingCon__Jp-4Z",
                    buttons: "Hero_buttons__Cm1FM",
                    btn1: "Hero_btn1__u5E0A",
                    btn2: "Hero_btn2__cHfPy",
                    splineBgCon: "Hero_splineBgCon__yKcun",
                    avatarGroup: "Hero_avatarGroup__MXZh-",
                    avatarRow: "Hero_avatarRow__VH4kA",
                    avatarItem: "Hero_avatarItem__J8Qkq",
                    avatarImg: "Hero_avatarImg__2SKoI",
                    avatarText: "Hero_avatarText__suXkJ",
                    logoLoopCon: "Hero_logoLoopCon__ChnCN"
                };
            var s = n(4475),
                a = n(579);

            function l() {
                return (0, a.jsx)("div", {
                    className: o.headingCon,
                    children: (0, a.jsx)(s.A, {
                        colors: ["#7e27ff", "#d0a0fc", "#8839ffff", "#d0a0fc", "#8839ffff"],
                        animationSpeed: 10,
                        showBorder: !1,
                        className: "custom-class",
                        children: (0, a.jsxs)("h1", {
                            children: ["We Build Scalable ", (0, a.jsx)("br", {}), " Software for Startups"]
                        })
                    })
                })
            }

            function c(e) {
                let {
                    text: t,
                    disabled: n = !1,
                    speed: i = 5,
                    className: r = ""
                } = e;
                const o = "".concat(i, "s");
                return (0, a.jsx)("div", {
                    className: "shiny-text ".concat(n ? "disabled" : "", " ").concat(r),
                    style: {
                        animationDuration: o
                    },
                    children: t
                })
            }

            function d() {
                const [e, t] = (0, i.useState)(window.innerWidth);
                (0, i.useEffect)((() => {
                    const e = () => t(window.innerWidth);
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }), []);
                const n = e < 400 ? "Leading full-stack developers specializing \n in custom website and mobile app solutions" : "Leading full-stack developers specializing in custom \n website and mobile app solutions";
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(c, {
                        text: n,
                        disabled: !1,
                        speed: 3,
                        className: o.subHeadingCon
                    })
                })
            }
            var p = n(7937),
                m = n(1675),
                h = n(117);

            function u() {
                return (0, a.jsx)("a", {
                    href: "https://cal.com/evolvion/30min",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, a.jsxs)(h.P.div, {
                        whileTap: {
                            scale: .95
                        },
                        className: "".concat(o.miniBanner),
                        children: [(0, a.jsxs)("button", {
                            type: "button",
                            children: [" ", (0, a.jsx)("h5", {
                                children: "Only 2 spots left this month"
                            }), " "]
                        }), (0, a.jsxs)("h5", {
                            children: ["Book an intro call ", ">"]
                        })]
                    })
                })
            }
            const v = [{
                src: "/images/jake.webp",
                alt: "Jake"
            }, {
                src: "/images/parker.jpg",
                alt: "Parker"
            }, {
                src: "/images/ari.png",
                alt: "Ari"
            }, {
                src: "/images/dimitris.webp",
                alt: "Dimitris"
            }, {
                src: "/images/mcclain.webp",
                alt: "McClain"
            }];

            function x() {
                return (0, a.jsxs)("div", {
                    className: o.avatarGroup,
                    children: [(0, a.jsx)("div", {
                        className: o.avatarRow,
                        children: v.map(((e, t) => (0, a.jsx)("div", {
                            className: o.avatarItem,
                            style: {
                                "--i": t
                            },
                            children: (0, a.jsx)("img", {
                                src: e.src,
                                className: o.avatarImg,
                                draggable: !1,
                                alt: e.alt
                            })
                        }, e.src)))
                    }), (0, a.jsx)("p", {
                        className: o.avatarText,
                        children: "Trusted by hundreds of entrepreneurs"
                    })]
                })
            }
            const f = {
                wrapper: "ProjectsLoop_wrapper__t7-wF",
                slider: "ProjectsLoop_slider__CtfOz",
                swiper: "ProjectsLoop_swiper__PgHQw",
                slideItem: "ProjectsLoop_slideItem__xxuBM",
                slideLink: "ProjectsLoop_slideLink__iG6lY",
                imageWrapper: "ProjectsLoop_imageWrapper__WQ9LQ",
                image: "ProjectsLoop_image__0WMHE"
            };
            var _ = n(4975),
                g = n(4083);
            n(4014);
            const j = [{
                    id: 1,
                    src: "/projects/1.webp",
                    href: "https://www.evolvion.io/portfolio/supertip",
                    alt: "Project 1"
                }, {
                    id: 2,
                    src: "/projects/2.webp",
                    href: "https://www.evolvion.io/portfolio/fuel-clubs",
                    alt: "Project 2"
                }, {
                    id: 3,
                    src: "/projects/3.webp",
                    href: "https://www.evolvion.io/portfolio/mentr",
                    alt: "Project 3"
                }, {
                    id: 4,
                    src: "/projects/4.webp",
                    href: "https://www.evolvion.io/portfolio/light-track",
                    alt: "Project 4"
                }, {
                    id: 5,
                    src: "/projects/5.webp",
                    href: "https://www.evolvion.io/portfolio/privacybot",
                    alt: "Project 5"
                }, {
                    id: 6,
                    src: "/projects/6.webp",
                    href: "https://www.evolvion.io/portfolio/anchorize",
                    alt: "Project 6"
                }, {
                    id: 7,
                    src: "/projects/7.webp",
                    href: "https://www.evolvion.io/portfolio/evala",
                    alt: "Project 7"
                }, {
                    id: 8,
                    src: "/projects/8.webp",
                    href: "https://www.evolvion.io/portfolio/pitchperfecter",
                    alt: "Project 8"
                }],
                b = [...j, ...j];

            function w(e) {
                let {
                    baseSpeed: t = 70,
                    hoverFactor: n = .35
                } = e;
                return (0, a.jsx)("div", {
                    className: f.wrapper,
                    children: (0, a.jsx)("div", {
                        className: f.slider,
                        children: (0, a.jsx)(_.RC, {
                            modules: [g.Ij],
                            className: f.swiper,
                            loop: !0,
                            loopedSlides: b.length,
                            speed: 3e3,
                            autoplay: {
                                delay: 0,
                                disableOnInteraction: !1,
                                pauseOnMouseEnter: !1
                            },
                            allowTouchMove: !1,
                            simulateTouch: !1,
                            grabCursor: !1,
                            slidesPerView: 2,
                            spaceBetween: 0,
                            breakpoints: {
                                400: {
                                    slidesPerView: 3
                                },
                                481: {
                                    slidesPerView: 4
                                },
                                800: {
                                    slidesPerView: 5
                                }
                            },
                            children: b.map(((e, t) => (0, a.jsx)(_.qr, {
                                className: f.slideItem,
                                children: (0, a.jsx)("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: f.slideLink,
                                    children: (0, a.jsx)("div", {
                                        className: f.imageWrapper,
                                        children: (0, a.jsx)("img", {
                                            src: e.src,
                                            alt: e.alt,
                                            className: f.image,
                                            loading: "lazy",
                                            draggable: !1
                                        })
                                    })
                                })
                            }, "".concat(e.id, "-").concat(t))))
                        })
                    })
                })
            }

            function y() {
                const e = (0, m.Zp)();
                return (0, a.jsxs)("div", {
                    id: "hero",
                    className: o.hero,
                    children: [(0, a.jsx)("div", {
                        className: o.main,
                        children: (0, a.jsxs)("div", {
                            className: o.content,
                            children: [(0, a.jsx)(p.A, {
                                fromY: 60,
                                delay: 0,
                                duration: .35,
                                children: (0, a.jsx)(u, {})
                            }), (0, a.jsx)(p.A, {
                                fromY: 60,
                                delay: .1,
                                duration: .35,
                                children: (0, a.jsx)(l, {})
                            }), (0, a.jsx)(p.A, {
                                fromY: 60,
                                delay: .15,
                                duration: .35,
                                children: (0, a.jsx)(d, {})
                            }), (0, a.jsx)(p.A, {
                                fromY: 40,
                                delay: .2,
                                duration: .35,
                                children: (0, a.jsxs)("div", {
                                    className: o.buttons,
                                    children: [(0, a.jsxs)("button", {
                                        type: "button",
                                        className: o.btn1,
                                        onClick: () => {
                                            e("/portfolio")
                                        },
                                        children: [" ", (0, a.jsx)("h5", {
                                            children: "View our portfolio"
                                        }), " "]
                                    }), (0, a.jsx)("a", {
                                        href: "https://cal.com/evolvion/30min",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, a.jsxs)("button", {
                                            type: "button",
                                            className: o.btn2,
                                            children: [" ", (0, a.jsx)("h5", {
                                                children: "Book a Call"
                                            }), " "]
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(p.A, {
                                fromY: 40,
                                delay: .2,
                                duration: .35,
                                children: (0, a.jsx)(x, {})
                            })]
                        })
                    }), (0, a.jsx)(p.A, {
                        fromY: 40,
                        delay: .3,
                        duration: .35,
                        children: (0, a.jsx)(w, {})
                    }), (0, a.jsx)(h.P.div, {
                        className: o.LeftBgGradient
                    }), (0, a.jsx)(a.Fragment, {})]
                })
            }
            const k = {
                about: "About_about__DAYdI",
                container: "About_container__0SD02",
                heroText: "About_heroText__gUdB2",
                aboutUs: "About_aboutUs__Cz3-j",
                featuresSection: "About_featuresSection__kfqXP",
                projects: "About_projects__kdhtS",
                card_inner_img: "About_card_inner_img__XR-ed",
                projectsInner: "About_projectsInner__rKU1u",
                featuresList: "About_featuresList__n9G2R",
                featureBox: "About_featureBox__WabXq",
                activeFeatureBox: "About_activeFeatureBox__FG-FW",
                topSection: "About_topSection__p-lfE"
            };

            function A() {
                const e = (0, m.Zp)();
                return (0, a.jsxs)("section", {
                    className: k.about,
                    id: "about-section",
                    children: [(0, a.jsxs)("div", {
                        className: k.container,
                        children: [(0, a.jsxs)("h2", {
                            children: ["Experienced ", (0, a.jsx)("span", {
                                children: " Full-Stack "
                            }), " Developers"]
                        }), (0, a.jsxs)("p", {
                            children: ["With 200+ projects delivered, we offer fast, reliable mobile app and web ", (0, a.jsx)("br", {}), "development and unlimited revisions to bring your vision to life"]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: k.featuresSection,
                        children: [(0, a.jsxs)("div", {
                            className: k.projects,
                            children: [(0, a.jsx)("img", {
                                src: "/images/project.png",
                                alt: "projects background for mobile",
                                draggable: !1,
                                className: k.card_inner_img
                            }), (0, a.jsxs)("div", {
                                className: k.projectsInner,
                                children: [(0, a.jsx)("h2", {
                                    children: "200+ Projects Launched"
                                }), (0, a.jsx)("p", {
                                    children: "With over 200 projects delivered, we build fast and reliable web and mobile apps complete with scalable architecture and unlimited revisions.                        "
                                }), (0, a.jsxs)("button", {
                                    onClick: () => {
                                        e("/portfolio")
                                    },
                                    children: [" ", (0, a.jsx)("h5", {
                                        children: "View our portfolio"
                                    }), " "]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: k.featuresList,
                            children: [(0, a.jsxs)("div", {
                                className: k.featureBox,
                                children: [(0, a.jsx)("h3", {
                                    children: "Full-Stack Development"
                                }), (0, a.jsx)("p", {
                                    children: "We build complete solutions from design to development and AI/ML, backed by a proven track record of creating high-performing and impactful apps and websites."
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "".concat(k.featureBox),
                                children: [(0, a.jsx)("h3", {
                                    children: "Quick Delivery"
                                }), (0, a.jsx)("p", {
                                    children: "With over a decade of experience, we deliver innovative, scalable designs and apps that balance quality, speed, and customer satisfaction."
                                })]
                            }), (0, a.jsxs)("div", {
                                className: k.featureBox,
                                children: [(0, a.jsx)("h3", {
                                    children: "Unlimited Revisions"
                                }), (0, a.jsx)("p", {
                                    children: "We offer unlimited revisions and dedicated support to ensure your website or app matches your vision down to every detail."
                                })]
                            })]
                        })]
                    })]
                })
            }
            const N = {
                    hero: "Reviews_hero__1Fy4Y",
                    container: "Reviews_container__b+Jag",
                    carousel: "Reviews_carousel__Yfesx",
                    card: "Reviews_card__xQpW7",
                    profile: "Reviews_profile__XZ7ci",
                    avatar: "Reviews_avatar__lp007",
                    quoteMark: "Reviews_quoteMark__f9CfO",
                    reviewText: "Reviews_reviewText__V2CRu",
                    cardBottom: "Reviews_cardBottom__awp+Z",
                    btnWrapper: "Reviews_btnWrapper__oqCXE"
                },
                I = e => {
                    let {
                        children: t,
                        className: n = "",
                        spotlightColor: r = "rgba(255, 255, 255, 0.25)"
                    } = e;
                    const o = (0, i.useRef)(null);
                    return (0, a.jsx)("div", {
                        ref: o,
                        onMouseMove: e => {
                            const t = o.current.getBoundingClientRect(),
                                n = e.clientX - t.left,
                                i = e.clientY - t.top;
                            o.current.style.setProperty("--mouse-x", "".concat(n, "px")), o.current.style.setProperty("--mouse-y", "".concat(i, "px")), o.current.style.setProperty("--spotlight-color", r)
                        },
                        className: "card-spotlight ".concat(n),
                        children: t
                    })
                };
            var C = n(3546);

            function S() {
                const e = [{
                    name: "Jake Marine",
                    company: "Founder at Anchorize",
                    avatar: "/images/jake.webp",
                    bg: "/images/reviewbg2.png",
                    review: (0, a.jsxs)("div", {
                        children: ["I wanted to thank Evolvion.io for all of the amazing work your team did in such a short amount of time. The attention to detail, UI/UX...", (0, a.jsx)("a", {
                            href: "https://www.linkedin.com/feed/update/urn:li:activity:7336785375874469889",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#a365ff"
                            },
                            children: "View More"
                        })]
                    })
                }, {
                    name: "McClain Strelow",
                    company: "CEO at FuelClubs",
                    avatar: "/images/mcclain.webp",
                    bg: "/images/reviewbg3.png",
                    review: (0, a.jsxs)("div", {
                        children: ["Evolvion did an incredible job building my FuelClubs app. They listened to every idea, offered thoughtful recommendations...", (0, a.jsx)("a", {
                            href: "https://www.linkedin.com/feed/update/urn:li:activity:7396245250484183040/",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#a365ff"
                            },
                            children: "View More"
                        })]
                    })
                }, {
                    name: "Ari Rosen",
                    company: "CEO at Mentr",
                    avatar: "/images/ari.png",
                    bg: "/images/reviewbg3.png",
                    review: (0, a.jsxs)("div", {
                        children: ["Working with Evolvion has been an incredible experience. They were responsive, detail-oriented, and professional from start to...", (0, a.jsx)("a", {
                            href: "https://www.linkedin.com/feed/update/urn:li:activity:7390036306468237313/",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#a365ff"
                            },
                            children: "View More"
                        })]
                    })
                }, {
                    name: "Dimitris Karras",
                    company: "CEO at LightTrack",
                    avatar: "/images/dimitris.webp",
                    bg: "/images/reviewbg3.png",
                    review: (0, a.jsxs)("div", {
                        children: ["Working with Evolvion has been exceptional from start to finish. They offered an unbeatable quote, provided full support...", (0, a.jsx)("a", {
                            href: "https://www.linkedin.com/feed/update/urn:li:activity:7396204674724417536/",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#a365ff"
                            },
                            children: "View More"
                        })]
                    })
                }, {
                    name: "Parker Newman",
                    company: "CEO at SignWell",
                    avatar: "/images/parker.jpg",
                    bg: "/images/reviewbg3.png",
                    review: (0, a.jsxs)("div", {
                        children: ["Evolvion.io has gone above and beyond our expectations and delivered a ", (0, a.jsx)("span", {
                            style: {
                                whiteSpace: "nowrap"
                            },
                            children: " first class "
                        }), "product at a fraction of the price...", (0, a.jsx)("a", {
                            href: "https://www.linkedin.com/feed/update/urn:li:activity:7366477912671166464/",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#a365ff"
                            },
                            children: "View More"
                        })]
                    })
                }];
                let t = e;
                3 === e.length && (t = [...e, ...e]);
                const n = Math.ceil(t.length / 3),
                    [r, o] = (0, i.useState)(0),
                    s = 3 * r,
                    l = s + 3,
                    c = t.slice(s, l),
                    d = [.05, .15, .2],
                    p = 0 === r,
                    m = r === n - 1;
                return (0, a.jsx)("section", {
                    className: N.hero,
                    id: "reviews-section",
                    children: (0, a.jsxs)("div", {
                        className: N.container,
                        children: [(0, a.jsxs)("h2", {
                            children: ["What Some of ", (0, a.jsx)("span", {
                                children: " Our Clients "
                            }), " Say"]
                        }), (0, a.jsx)("p", {
                            children: "With hundreds of web and mobile projects completed, we deliver proven, high-quality solutions for clients across every industry"
                        }), (0, a.jsx)("div", {
                            className: N.carousel,
                            children: (0, a.jsx)(C.N, {
                                mode: "wait",
                                children: c.map(((e, t) => {
                                    const n = d[t] || .1;
                                    return (0, a.jsx)(h.P.div, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        transition: {
                                            delay: n,
                                            duration: .3
                                        },
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: (0, a.jsx)(I, {
                                            className: "custom-spotlight-card",
                                            spotlightColor: "rgb(225, 187, 251, 0.2)",
                                            children: (0, a.jsxs)("div", {
                                                className: N.card,
                                                children: [(0, a.jsxs)("div", {
                                                    className: N.profile,
                                                    children: [(0, a.jsx)("img", {
                                                        src: e.avatar,
                                                        alt: e.name,
                                                        className: N.avatar,
                                                        draggable: !1
                                                    }), (0, a.jsxs)("div", {
                                                        children: [(0, a.jsx)("h4", {
                                                            children: e.name
                                                        }), (0, a.jsx)("span", {
                                                            children: e.company
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: N.quoteMark,
                                                    children: "\u275d"
                                                }), (0, a.jsxs)("p", {
                                                    className: N.reviewText,
                                                    children: [e.review, " "]
                                                }), (0, a.jsx)("div", {
                                                    className: N.cardBottom
                                                })]
                                            })
                                        })
                                    }, "".concat(r, "-").concat(t))
                                }))
                            })
                        }), (0, a.jsxs)("div", {
                            className: N.btnWrapper,
                            children: [(0, a.jsx)("button", {
                                onClick: () => {
                                    o((e => Math.max(0, e - 1)))
                                },
                                disabled: p,
                                style: {
                                    opacity: p ? .5 : 1
                                },
                                children: (0, a.jsxs)("svg", {
                                    style: {
                                        transform: "rotate(180deg)"
                                    },
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0, a.jsx)("path", {
                                        d: "M5 12H19",
                                        stroke: "#8F9BB7",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, a.jsx)("path", {
                                        d: "M12 5L19 12L12 19",
                                        stroke: "#8F9BB7",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => {
                                    o((e => Math.min(n - 1, e + 1)))
                                },
                                disabled: m,
                                style: {
                                    opacity: m ? .5 : 1
                                },
                                children: (0, a.jsxs)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0, a.jsx)("path", {
                                        d: "M5 12H19",
                                        stroke: "#8F9BB7",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, a.jsx)("path", {
                                        d: "M12 5L19 12L12 19",
                                        stroke: "#8F9BB7",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            const q = {
                service: "Services_service__gSufJ",
                container: "Services_container__9UqJs",
                heroText: "Services_heroText__dTkw0",
                serviceUs: "Services_serviceUs__XWbvq",
                slider: "Services_slider__cfzeZ",
                marqueeWrapper: "Services_marqueeWrapper__oiDwN",
                marqueeContent: "Services_marqueeContent__0f0GM",
                marqueeItem: "Services_marqueeItem__QPfQi",
                topSection: "Services_topSection__2Xy6a"
            };

            function B() {
                const e = ["UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications", "UI/UX Design", "Front-End Development", "Back-End Development", "AI/ML Development", "Mobile Apps", "Custom Applications"],
                    t = [...e, ...e],
                    n = 40 * e.length;
                return (0, a.jsx)("div", {
                    className: q.marqueeWrapper,
                    children: (0, a.jsx)(h.P.div, {
                        className: q.marqueeContent,
                        animate: {
                            y: [0, -n]
                        },
                        transition: {
                            duration: 40,
                            ease: "linear",
                            repeat: 1 / 0,
                            repeatType: "loop"
                        },
                        children: t.map(((e, t) => (0, a.jsx)("div", {
                            className: q.marqueeItem,
                            children: e
                        }, t)))
                    })
                })
            }

            function L() {
                return (0, a.jsxs)("section", {
                    className: q.service,
                    id: "services-section",
                    children: [(0, a.jsxs)("div", {
                        className: q.container,
                        children: [(0, a.jsxs)("h2", {
                            children: ["Complete ", (0, a.jsx)("span", {
                                children: " Website & Mobile App "
                            }), " Development"]
                        }), (0, a.jsxs)("p", {
                            children: ["We specialize in UI/UX design, front-end and back-end development, ", (0, a.jsx)("br", {}), " and cutting-edge AI/ML solutions"]
                        })]
                    }), (0, a.jsx)("div", {
                        className: q.slider,
                        children: (0, a.jsx)(B, {})
                    })]
                })
            }
            const M = {
                hero: "Faq_hero__e5Kvz",
                container: "Faq_container__lntbg",
                exploreBtn: "Faq_exploreBtn__5GDYO",
                grid: "Faq_grid__1MwK8",
                linkLike: "Faq_linkLike__TcD6S",
                gridItem: "Faq_gridItem__v8RSU",
                sceneCon: "Faq_sceneCon__q6JtU",
                faqCon: "Faq_faqCon__fE+WD",
                faqItem: "Faq_faqItem__e29OG"
            };
            var D = n(4535),
                W = n(3766),
                F = n(710),
                E = n(6605),
                P = n(8293);
            const U = (0, D.Ay)("div")({
                    width: "100%",
                    maxWidth: "800px",
                    margin: "0 auto"
                }),
                H = (0, D.Ay)(W.A)({
                    background: "#0e142f6b",
                    border: "1px solid #282d4575",
                    backdropFilter: "blur(7px)",
                    color: "white",
                    marginBottom: "10px !important",
                    borderRadius: "10px !important",
                    padding: "5px 15px !important",
                    "&:before": {
                        display: "none"
                    }
                }),
                R = (0, D.Ay)(E.A)({
                    minHeight: "32px !important",
                    margin: "0 !important",
                    padding: "0px 10px !important",
                    "&.Mui-expanded": {
                        margin: "0 !important",
                        minHeight: "32px !important",
                        padding: "0px 10px !important"
                    },
                    ".MuiAccordionSummary-content": {
                        margin: "10px 0 !important"
                    }
                }),
                T = (0, D.Ay)(F.A)({
                    padding: "0 16px 16px 10px !important",
                    textAlign: "left"
                }),
                z = (0, D.Ay)("h5")({
                    fontWeight: "bold",
                    fontSize: "1rem"
                }),
                X = (0, D.Ay)("h5")({
                    fontSize: "15px",
                    color: "white",
                    fontWeight: "200"
                }),
                O = () => {
                    const [e, t] = (0, i.useState)("panel1"), n = (0, m.Zp)(), r = [{
                        question: "What services does your agency offer?",
                        answer: "We specialize in custom mobile app and web development, UI/UX, AI/ML, DevOps, AI-powered applications, interactive dashboards, SEO-optimized mobile apps and websites, SaaS applications, and AI chatbots. Our team builds high-performance digital solutions that enhance user experience and drive business growth."
                    }, {
                        question: "Do you provide AI-powered solutions for businesses?",
                        answer: "Yes! We develop AI-driven chatbots, automation tools, recommendation engines, and AI-integrated applications that streamline operations, enhance customer engagement, and improve decision-making."
                    }, {
                        question: "Do you offer ongoing support and maintenance?",
                        answer: "Yes! We provide regular updates, security patches, performance optimizations, and feature enhancements to keep your website or application running smoothly."
                    }, {
                        question: "Do you guys also develop mobile apps?",
                        answer: "Absolutely! In addition to web platforms, we specialize in cross-platform mobile app development for iOS and Android using modern frameworks like React Native and Flutter. Whether you need a standalone mobile experience or an app that integrates seamlessly with your web platform, we deliver fast, scalable, and user-friendly solutions."
                    }, {
                        question: "Do you integrate third-party APIs and tools?",
                        answer: "Yes! We can integrate payment gateways, CRM systems, AI models, data analytics tools, and other third-party APIs to enhance your website\u2019s functionality."
                    }, {
                        question: "How can I get started with my project?",
                        answer: (0, a.jsxs)(a.Fragment, {
                            children: ["You can submit your basic project requirements through", " ", (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => n("/contact-us"),
                                className: M.linkLike,
                                children: "contact us"
                            }), " ", "or set up a free", " ", (0, a.jsx)("a", {
                                href: "https://cal.com/evolvion/30min",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "30-minute meeting"
                            }), " ", "to discuss your project in detail. We\u2019ll go over your needs, suggest the best solutions, and provide a customized proposal."]
                        })
                    }];
                    return (0, a.jsx)(U, {
                        children: r.map(((n, i) => {
                            return (0, a.jsxs)(H, {
                                expanded: e === "panel".concat(i + 1),
                                onChange: (r = "panel".concat(i + 1), (e, n) => {
                                    t(!!n && r)
                                }),
                                className: M.faqItem,
                                children: [(0, a.jsx)(R, {
                                    expandIcon: (0, a.jsx)(P.A, {
                                        style: {
                                            color: "white"
                                        }
                                    }),
                                    "aria-controls": "panel".concat(i + 1, "bh-content"),
                                    id: "panel".concat(i + 1, "bh-header"),
                                    children: (0, a.jsx)(z, {
                                        children: n.question
                                    })
                                }), (0, a.jsx)(T, {
                                    children: (0, a.jsx)(X, {
                                        children: n.answer
                                    })
                                })]
                            }, i);
                            var r
                        }))
                    })
                };

            function Y() {
                return (0, a.jsxs)("section", {
                    className: M.hero,
                    id: "faq-section",
                    children: [(0, a.jsx)("div", {
                        className: M.container,
                        children: (0, a.jsxs)("h2", {
                            children: ["Frequently Asked ", (0, a.jsx)("span", {
                                children: "Questions"
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: M.grid,
                        children: (0, a.jsx)("div", {
                            className: M.faqCon,
                            children: (0, a.jsx)(O, {})
                        })
                    })]
                })
            }
            var G = n(9367);

            function V() {
                const e = (0, m.Zp)(),
                    t = (0, m.zy)();
                return (0, i.useEffect)((() => {
                    var n;
                    const i = null === t || void 0 === t || null === (n = t.state) || void 0 === n ? void 0 : n.scrollTo;
                    if (!i) return;
                    const {
                        id: r,
                        offset: o = 0
                    } = i;
                    requestAnimationFrame((() => {
                        setTimeout((() => {
                            ! function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                const n = document.getElementById(e);
                                if (n) {
                                    const e = n.offsetTop + t;
                                    window.scroll({
                                        top: e,
                                        behavior: "smooth"
                                    })
                                }
                            }(r, o), e(t.pathname, {
                                replace: !0,
                                state: {}
                            })
                        }), 0)
                    }))
                }), [t.state, t.pathname, e]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(G.mg, {
                        children: [(0, a.jsx)("title", {
                            children: "Evolvion | Evolving Ideas Into Custom Software"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "Leading full-stack developers specializing custom website and mobile app solutions."
                        }), (0, a.jsx)("meta", {
                            name: "keywords",
                            content: "Website Agency, Website Development Agency, Web Development, full stack, AI development, UI/UX Design, SEO Services, SaaS, Frontend Developer, AI chatbots, modern website"
                        }), (0, a.jsx)("meta", {
                            name: "robots",
                            content: "index, follow"
                        }), (0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://evolvion.io/"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: r.pageWrapper,
                        children: [(0, a.jsx)(y, {}), (0, a.jsx)(A, {}), (0, a.jsx)(L, {}), (0, a.jsx)(S, {}), (0, a.jsx)(Y, {})]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=760.52565ca9.chunk.js.map