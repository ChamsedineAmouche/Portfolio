import React from "react"
import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader";
import bootstrapImg from '../assets/bootstrap.png';
import cImg from '../assets/C.png';
import figmaImg from '../assets/figma.png';
import githubImg from '../assets/github.png';
import javaImg from '../assets/java.png';
import jsImg from '../assets/js.png';
import mongodbImg from '../assets/mongodb.png';
import phpImg from '../assets/php.png';
import postgresqlImg from '../assets/postgresql.png';
import pythonImg from '../assets/python.png';
import symfonyImg from '../assets/symfony.png';
import tailwindImg from '../assets/tailwind.png';
import vscodeImg from '../assets/vscode.png';
import jiraImg from '../assets/jira.png';
import nodejsImg from '../assets/node-js.png'
import mysqlImg from '../assets/mysql.png'
import reactImg from '../assets/react.png'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-dark text-primary font-outfit py-16 px-4 flex flex-col"
        >
            <SectionHeader title="COMPETENCES" />

            {/* Partie inférieure : Grille centrée verticalement */}
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                    >
                        {/* Bloc 1 : Langages */}
                        <motion.div
                            className="bg-[var(--color-lightDark)] p-4 rounded border border-[var(--color-darkPrimary)]"
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xl text-[var(--color-primary)] mb-4">Langages</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={pythonImg} alt="Python" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Python</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={phpImg} alt="PHP" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">PHP</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={jsImg} alt="JavaScript" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">JavaScript</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={javaImg} alt="Java" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Java</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={cImg} alt="C" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">C</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Bloc 2 : Frameworks & Libraries */}
                        <motion.div
                            className="bg-[var(--color-lightDark)] p-4 rounded border border-[var(--color-darkPrimary)]"
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xl text-[var(--color-primary)] mb-4">Frameworks & Libraries</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={bootstrapImg} alt="Bootstrap" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Bootstrap</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={tailwindImg} alt="Tailwind" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Tailwind</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        {/* Pour React, ajoutez l'icône correspondante si disponible */}
                                        <img src={reactImg} alt="React" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">React</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={nodejsImg} alt="NodeJS" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">NodeJS</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={symfonyImg} alt="Symfony" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Symfony</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Bloc 3 : Base de données */}
                        <motion.div
                            className="bg-[var(--color-lightDark)] p-4 rounded border border-[var(--color-darkPrimary)]"
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xl text-[var(--color-primary)] mb-4">Base de données</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        {/* Pour MySQL, utilisez une image appropriée si disponible */}
                                        <img src={mysqlImg} alt="MySQL" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">MySQL</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={postgresqlImg} alt="PostgreSQL" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">PostgreSQL</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={mongodbImg} alt="MongoDB" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">MongoDB</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Bloc 4 : Outils */}
                        <motion.div
                            className="bg-[var(--color-lightDark)] p-4 rounded border border-[var(--color-darkPrimary)]"
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xl text-[var(--color-primary)] mb-4">Outils</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={githubImg} alt="GitHub" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">GitHub</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={figmaImg} alt="Figma" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Figma</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={jiraImg} alt="Jira" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">Jira</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img src={vscodeImg} alt="VS Code" className="w-4 h-4" />
                                    </div>
                                    <span className="text-[var(--color-primary)]">VS Code</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills;