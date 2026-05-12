import React from 'react'
import Classes from '../Hero.module.css'
import { motion } from 'framer-motion'

export default function Toolbar() {
    return (
        <a
            href="https://cal.com/evolvion/30min"
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div
                whileTap={{ scale: 0.95 }}
                className={`${Classes.miniBanner}`}
            >
                <button type='button' > <h5>Only 2 spots left this month</h5> </button>
                <h5>Book an intro call {'>'}</h5>
            </motion.div>
        </a>
    )
}
