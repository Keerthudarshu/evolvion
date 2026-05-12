import React from 'react'
import Classes from '../Hero.module.css'
import { motion } from 'framer-motion'

export default function Toolbar() {
    return (
        <a
            href="https://virtuososys.co/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div
                whileTap={{ scale: 0.95 }}
                className={`${Classes.miniBanner}`}
            >
                <button type='button' > <h5>Affordable & World-Class Quality</h5> </button>
                <h5>Visit our website {'>'}</h5>
            </motion.div>
        </a>
    )
}
