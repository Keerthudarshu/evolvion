import React from 'react';
import { motion } from 'framer-motion';
import classes from './Services.module.css';

export default function MyScrollingServices() {
    // Original items
    const services = [
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
        'Web Development',
        'Software Testing (QA)',
        'Mobile App Development',
        'UI/UX Design',
        'Technical Training',
        'AI Development',
        'E-commerce Solutions',
        'SaaS Development',
    ];

    // Duplicate array for seamless scrolling
    const repeatedServices = [...services, ...services];

    // Height of each text row
    const ITEM_HEIGHT = 40;
    // Total height of the original list
    const singleListHeight = services.length * ITEM_HEIGHT;

    return (
        <div className={classes.marqueeWrapper}>
            {/* This motion div animates from y=0 to y=-singleListHeight and loops */}
            <motion.div
                className={classes.marqueeContent}
                animate={{ y: [0, -singleListHeight] }}
                transition={{
                    duration: 40,         // Adjust speed (larger = slower)
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
            >
                {repeatedServices.map((item, i) => (
                    <div key={i} className={classes.marqueeItem}>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
