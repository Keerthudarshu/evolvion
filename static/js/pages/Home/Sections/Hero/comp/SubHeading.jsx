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
        `Leading full-stack developers specializing \n in custom website and mobile app solutions`
        : `Leading full-stack developers specializing in custom \n website and mobile app solutions`

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
