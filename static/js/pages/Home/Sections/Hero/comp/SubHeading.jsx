import React, { useEffect, useState } from 'react'
import ShinyText from '../../../../../components/Navbar/reactbits/ShinyText/ShinyText'
import Classes from '../Hero.module.css'
// import useScreenWidth from '../../../../../Hooks/useScreenWidth';

export default function SubHeading() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update windowWidth on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const text = windowWidth < 400 ?
        `360° IT solutions — web development, software \n testing, mobile apps & AI at affordable rates`
        : `360° IT solutions — web development, software testing, \n mobile apps & AI at the most affordable rates`

    return (
        <>
            <ShinyText
                text={text}
                disabled={false}
                speed={3}
                className={Classes.subHeadingCon}
            />
        </>
    )
}
