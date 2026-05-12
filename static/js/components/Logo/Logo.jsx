import React from 'react'
import GradientText from '../Navbar/reactbits/TextAnimations/GradientText/GradientText'
import useScreenWidth from '../../Hooks/useScreenWidth'


export default function Logo({ alwaysShowText = false }) {
    const isMobile = useScreenWidth() < 768;

    return (
        <>
            <div className='logo' >
                <img src='/logo.png' alt='virtuososys logo' />
                {(!isMobile || alwaysShowText) &&
                    <GradientText
                        colors={["#7e27ff", "#d0a0fc", "#7e27ff", "#d0a0fc", "#7e27ff"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="custom-class"
                    >
                        VIRTUOSOSYS
                    </GradientText>
                }
            </div>
        </>
    )
}
