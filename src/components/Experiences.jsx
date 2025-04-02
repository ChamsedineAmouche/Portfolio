import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";
import schoolIcon from "../assets/school.png";
import workIcon from "../assets/work.png";

// Variants pour le conteneur d'expériences (stagger)
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

// Variants pour chaque item (apparition)
const itemVariants = {
    hidden: { opacity: 0, y: 20, transition: { ease: "easeOut" } },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const experiences = [
    {
        side: "right",
        date: "2023 - 2025",
        title: "Apprenti Développeur Full Stack",
        subtitle: "BATEXT, 77220, Gretz-Armainvilliers",
        details: "Développement d'application web internes",
        icon: workIcon,
    },
    {
        side: "left",
        date: "2022 - 2025",
        title: "BUT Informatique",
        subtitle: "Université Gustave Eiffel, 77420, Champs-sur-Marne",
        details: "Parcours réalisation et conception d’applications",
        icon: schoolIcon,
    },
    {
        side: "right",
        date: "2020 - 2021",
        title: "École d’ingénieurs",
        subtitle: "ESME Sudria Paris",
        details: "Prépa intégrée",
        icon: schoolIcon,
    },
    {
        side: "left",
        date: "2018 - 2020",
        title: "Baccalauréat STI2D",
        subtitle: "Lycée Langevin-Wallon, 94500, Champigny-sur-Marne",
        details: "Mention Très Bien",
        icon: schoolIcon,
    }
];

function Experiences() {
    const timelineRef = useRef(null);
    // useScroll sur le conteneur de la timeline :
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"],
    });
    // Mappez la progression du scroll à une échelle (0 à 1) pour la barre
    const scaleY = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    const thresholds = [0.15, 0.40, 0.65, 0.85];

    return (
        <section
            id="experiences"
            className="min-h screen bg-dark text-primary font-outfit py-16 px-4 flex flex-col"
        >
            {/* Partie supérieure : Header */}
            <SectionHeader title="PARCOURS" />

            {/* Partie inférieure : Timeline centrée */}
            <div className="flex-1 flex items-center justify-center w-full mt-24">
                <div className="max-w-5xl mx-auto w-full relative">
                    {/* Barre verticale de fond */}
                    <div className="
                    absolute
                    top-0 bottom-0
                    w-1
                    bg-[var(--color-lightDark)]
                    left-8
                    lg:left-1/2
                    lg:-translate-x-1/2
                    " />
                    {/* Barre verticale animée */}
                    <motion.div
                        className="
                            absolute
                            top-0 bottom-0
                            w-1
                            bg-[var(--color-primary)]
                            origin-top
                            left-8
                            lg:left-1/2
                            lg:-translate-x-1/2
                        "
                        style={{ scaleY }}
                    />

                    {/* Conteneur des expériences, avec stagger */}
                    <motion.div
                        className="relative mt-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                    >
                        {experiences.map((exp, index) => {
                            const side = exp.side === "left" ? "lg:items-end lg:pr-16 pl-24" : "lg:items-start lg:pl-16 pl-24";

                            // On crée une transformation de scaleY vers l’opacité
                            // Quand scaleY < thresholds[index], opacité = 0
                            // Quand scaleY >= thresholds[index], opacité = 1
                            const itemOpacity = useTransform(
                                scaleY,
                                [thresholds[index] - 0.01, thresholds[index]],
                                [0, 1],
                                { clamp: false }
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity: itemOpacity }}
                                    className={`relative flex flex-col items-start mb-16 ${side} min-h-[6rem]`}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Le rond (icône) */}
                                    <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2">
                                        <img src={exp.icon} alt="icon" className="w-5 h-5" />
                                    </div>

                                    {/* Le bloc de texte */}
                                    <div className="bg-[var(--color-lightDark)] p-4 rounded shadow-md w-full max-w-sm border border-[var(--color-darkPrimary)]">
                                        <p className="text-sm text-[var(--color-primary)] mb-2">{exp.date}</p>
                                        <h2 className="text-xl text-[var(--color-primary)] font-semibold mb-1">
                                            {exp.title}
                                        </h2>
                                        <h3 className="text-md text-[var(--color-primary)] mb-2">
                                            {exp.subtitle}
                                        </h3>
                                        <p className="text-[var(--color-primary)]">{exp.details}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experiences;