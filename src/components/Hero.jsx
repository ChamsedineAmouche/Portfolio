import React from 'react'
import { motion } from 'framer-motion'
import CV from '../assets/CV_Chamsedine_AMOUCHE.pdf'

function Hero() {
    return (
        <motion.section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center bg-dark text-primary font-outfit pt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <motion.h1
                className="cursor-default select-none mb-4 transition-all duration-300 text-3xl s:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-wider text-center hover:[text-shadow:_-1px_-1px_0_#B0E0E6,_1px_-1px_0_#B0E0E6,_-1px_1px_0_#B0E0E6,_1px_1px_0_#B0E0E6] hover:text-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                CHAMSEDINE AMOUCHE
            </motion.h1>

            <motion.p
                className="cursor-default select-none mb-8 transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-light tracking-wider text-center hover:[text-shadow:_-1px_-1px_0_#B0E0E6,_1px_-1px_0_#B0E0E6,_-1px_1px_0_#B0E0E6,_1px_1px_0_#B0E0E6] hover:text-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Apprenti développeur full-stack et étudiant en 3ème année de BUT Informatique
            </motion.p>

            <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <a
                    href={CV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lightDark hover:bg-dark border border-primary px-6 py-3 rounded-[20px] transition-colors"
                >
                    Voir mon CV
                </a>
                <a
                    href="#contact"
                    className="bg-lightDark hover:bg-dark border border-primary px-6 py-3 rounded-[20px] transition-colors"
                >
                    Me contacter
                </a>
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {/* Composant animé pour l'effet de haut en bas */}
                <motion.div
                    className="w-6 h-10 border-2 border-cream rounded-full flex justify-center pt-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Hero;