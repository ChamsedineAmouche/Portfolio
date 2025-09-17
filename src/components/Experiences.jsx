import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";
import schoolIcon from "../assets/school.png";
import workIcon from "../assets/work.png";

const experiences = [
    {
        side: "right",
        date: "2025 - 2028",
        title: "Apprenti Ingénieur Développement Logiciel",
        subtitle: "BATEXT, 77220, Gretz-Armainvilliers",
        details: "Chefferie de projets et développement d'applications web internes",
        icon: workIcon,
    },
    {
        side: "left",
        date: "2025 - 2028",
        title: "École d’ingénieurs",
        subtitle: "ESIEE Paris, Cité Descartes, 93160, Noisy-le-Grand",
        details: "Informatique et applications",
        icon: schoolIcon,
    },
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

    // Animation de la barre verticale
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="experiences"
            className="min-h screen bg-dark text-primary font-outfit py-16 px-4 flex flex-col"
        >
            {/* Partie supérieure : Header */}
            <SectionHeader title="PARCOURS" />

            {/* Partie inférieure : Timeline centrée */}
            <div className="flex-1 flex items-center justify-center w-full mt-24">
                <div ref={timelineRef} className="max-w-5xl mx-auto w-full relative">
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

                    {/* Conteneur des expériences avec stagger */}
                    <div className="relative mt-8">
                        {experiences.map((exp, index) => {
                            const side = 
                                exp.side === "left" 
                                    ? "lg:items-end lg:pr-16 pl-24"
                                    : "lg:items-start lg:pl-16 pl-24";

                            // synchro fade
                            const itemOpacity = useTransform(scrollYProgress, 
                                [index * 0.18 + 0.05, index * 0.18 + 0.1], // seuil par bloc
                                [0, 1]
                            );

                            // slide alterné selon side
                            const itemX = useTransform(
                                scrollYProgress,
                                [index * 0.18, index * 0.18 + 0.1],
                                exp.side === "left" ? [-100, 0] : [100, 0]
                            );

                            // Petit zoom (scale)
                            const itemScale = useTransform(
                                scrollYProgress,
                                [index * 0.18, index * 0.18 + 0.1],
                                [0.8, 1]
                            );

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col items-start mb-16 ${side} min-h-[6rem]`}
                                style={{ opacity: itemOpacity, x: itemX, scale: itemScale }}
                            >

                                {/* Rond avec icône */}
                                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2">
                                    <img src={exp.icon} alt="icon" className="w-5 h-5" />
                                </div>

                                {/* Bloc texte */}
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences;