import React from 'react';
// import VariableProximity from '../../../../../components/Navbar/reactbits/VariableProximity/VariableProximity';
import Classes from '../Hero.module.css'
import GradientText from '../../../../../components/Navbar/reactbits/TextAnimations/GradientText/GradientText';

export default function Heading() {
    // const containerRef = useRef(null);

    return (
        <div
            // ref={containerRef}
            className={Classes.headingCon}
        >
            {/* <VariableProximity
                label={'Your website brought to life'}
                className={'variable-proximity-demo'}
                fromFontVariationSettings="'wght' 500, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            /> */}
            <GradientText
                colors={["#7e27ff", "#d0a0fc", "#8839ffff", "#d0a0fc", "#8839ffff"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class"
            >
                <h1>
                    We Build Products That <br /> Users Like
                </h1>
            </GradientText>
        </div >
    )
}
