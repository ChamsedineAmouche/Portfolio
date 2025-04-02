import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectFilters from './ProjectFilters';
import ProjectModal from './ProjectModal';
import greenCircle from '../assets/greencircle.png';
import iPlans from '../assets/iplans.png';
import { SiUnderscoredotjs } from 'react-icons/si';
import unesco from '../assets/ProjetSeville.png';
import bataillesDeBoules from '../assets/BatailleDeBoule.png';
import conferencesNexus from '../assets/ConferencesNexus.png';
import wackyMonkeyWord from '../assets/semantic.png';
import pimpMyPaids from '../assets/pmp.png';

const projectsData = [
    {
        image: greenCircle,
        title: 'Green Circle',
        subtitle: 'Une plateforme éco-responsable',
        languages: ['React', 'NodeJS', 'MySQL', 'Python', 'Tailwind'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Optimiser', color: 'bg-lightOrange' },
            { label: 'Administrer', color: 'bg-darkYellow' },
            { label: 'Conduire', color: 'bg-darkBlue' },
            { label: 'Collaborer', color: 'bg-dark' }
        ],
        description: "Site web permettant aux entreprises du Val d'Europe de participer à l'économie circulaire. La plateforme comprend un système de mise à disposition des objets non utilisés ainsi que leur récupération, un système d'e-learning pour former les entreprises partenaires sur l'économie circulaire, un système de gestion d'évenements ainsi qu'un forum de discussion pour les utilisateurs. Un chatbot a aussi été mis en place dans ce projet pour aider les utilisateurs à naviguer sur le site.",
        github: 'https://github.com/ChamsedineAmouche/Green-Circle'
    },
    {
        image: iPlans,
        title: 'iPlans',
        subtitle: 'Une plateforme pour passer des commandes de plans',
        languages: ['JavaScript', 'PHP', 'PostgreSQL', 'Bootstrap'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Optimiser', color: 'bg-lightOrange' },
            { label: 'Administrer', color: 'bg-darkYellow' },
            { label: 'Gérer', color: 'bg-hulkGreen' },
            { label: 'Conduire', color: 'bg-darkBlue' },
            { label: 'Collaborer', color: 'bg-dark' }
        ],
        description: "Dans un souci de modernisation et d'efficacité, l'application iPlans a été développée pour répondre à la nécessité de digitaliser le processus de commande de plans incendie. En abandonnant les supports papier et les échanges par mail ou téléphone, cette plateforme offre aux clients une solution intuitive et accessible en ligne. iPlans permet de suivre en temps réel l'évolution des commandes, simplifie les interactions avec les équipes de production, et automatise certaines tâches clés, telles que les relances automatiques. Cette application garantit une expérience utilisateur améliorée tout en optimisant la gestion et le traitement des commandes.​",
        github: ''
    },
    {
        image: unesco,
        title: 'Projet Séville',
        subtitle: 'Site web sur la culture sévillane',
        languages: ['PHP', 'JavaScript','PostgreSQL'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Optimiser', color: 'bg-lightOrange' },
            { label: 'Gérer', color: 'bg-hulkGreen' },
            { label: 'Conduire', color: 'bg-darkBlue' },
            { label: 'Collaborer', color: 'bg-dark' }
        ],
        description: "Projet réalisé en 1re année de BUT - Informatique en quatuor. Projet en partenariat avec l'Unesco. Le but était de concevoir un site dynamique et responsif sur la culture sévillane pour permettre aux utilisateurs de ce renseigner sur la ville en prévision d'un futur voyage. Le site est traduit en anglais et en espagnol.​",
        github: ''
    },
    {
        image: bataillesDeBoules,
        title: 'Bataille de Boules',
        subtitle: 'Affrontez-vous pour dominer le champ de pixels',
        languages: ['Python'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Optimiser', color: 'bg-lightOrange' },
        ],
        description: "Projet réalisé en 1re année de BUT - Informatique en binômes. Le but étant de réaliser un jeu en 1 contre 1 (contre une personne physique) où l'objectif est de remplir le plus de surface possible avec des cercles de notre couleur. A la fin de la partie celui qui possède le plus de pixels gagne !",
        github: 'https://github.com/Eliaslhl/SAE_Python'
    },
    {
        image: pimpMyPaids,
        title: 'PimpMyPaids',
        subtitle: 'Plateforme de gestion de finances',
        languages: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Gérer', color: 'bg-hulkGreen' },
            { label: 'Conduire', color: 'bg-darkBlue' },
            { label: 'Collaborer', color: 'bg-dark' }
        ],
        description: "Projet réalisé en 2ème année de BUT Informatique en quintette. PimpMyPaids est un portail Web spécialisé pour permettre aux clients, qu'ils soient des entreprises ou des commerçants, de consulter leurs comptes et de suivre leurs transactions financières quotidiennes facilement !",
        github: 'https://github.com/FC-Rats/PimpMyPaids'
    },
    {
        image: conferencesNexus,
        title: 'Conférences Nexus',
        subtitle: 'Plateforme de gestion de conférences',
        languages: ['PHP', 'PostgreSQL', 'Python'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Gérer', color: 'bg-hulkGreen' },
        ],
        description: "Projet réalisé en 1re année de BUT - Informatique en binômes. Utilisation de la base de données conçu au semestre précèdent pour créer un site web permettant de l'utiliser. Conversion du fichier SQL au format PHPMyAdmin en fichier SQL au format PostgreSQL grâce à un script python. Ajustement du MCD et du MLD puis création de la maquette du site. Conception du site.",
        github: 'https://github.com/LeoDessertenne/Conference-Nexus'
    },
    {
        image: wackyMonkeyWord,
        title: 'Wacky Monkey Word',
        subtitle: 'Un duel linguistique en ligne : composez la chaîne de mots ultime',
        languages: ['PHP', 'Bootstrap', 'C', 'Java', 'Python', 'React', 'JavaScript', 'MySQL'],
        competencies: [
            { label: 'Réaliser', color: 'bg-darkRed' },
            { label: 'Optimiser', color: 'bg-lightOrange' },
            { label: 'Administrer', color: 'bg-darkYellow' },
            { label: 'Conduire', color: 'bg-darkBlue' },
            { label: 'Collaborer', color: 'bg-dark' }
        ],
        description: "Projet réalisé en 2ème année de BUT Informatique en quatuor, consistant en la création d’un jeu en ligne, jouable en solo ou en multijoueur, où l’objectif est de construire la meilleure chaîne de mots à partir de deux mots de départ. Le jeu met en avant la ressemblance entre les mots, évaluée par un moteur de calcul prenant en compte des critères linguistiques et orthographiques, et permet aux joueurs de s’affronter en temps réel.",
        github: 'https://github.com/abdelrkb/SAE_SEMANTIC'
    }
];

const projectVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    // Navigation
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const currentProject = projectsData[currentIndex];

    return (
        <section id="projects" className="min-h-screen bg-dark text-primary font-outfit py-16 px-4 flex flex-col">
            {/* Header de la section */}
            <SectionHeader title="PROJETS" />

            <ProjectFilters />

            {/* Carrousel */}
            <div className="flex items-center justify-center relative max-w-5xl mx-auto w-full">
                {/* Flèche de gauche */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 z-10 bg-dark hover:bg-opacity-70 text-darkPrimary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-[var(--color-darkPrimary)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
                    </svg>
                </button>

                {/* Zone de slide avec AnimatePresence */}
                <div className="relative w-full max-w-4xl overflow-hidden h-[500px]">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={currentProject.title}
                            variants={projectVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute w-full max-w-4xl inset-0"
                        >
                            {/* Image du projet */}
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-auto object-cover"
                            />

                            {/* Overlay en bas de l'image */}
                            <div className="absolute bottom-0 left-0 w-full bg-clearDark bg-opacity-40 p-4">
                                <h2 className="text-xl font-semibold">{currentProject.title}</h2>
                                <p className="text-sm">{currentProject.subtitle}</p>

                                {/* Langages */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {currentProject.languages.map((lang) => (
                                        <span key={lang} className="bg-gray-800 bg-opacity-70 px-2 py-1 text-xs rounded">
                                            {lang}
                                        </span>
                                    ))}
                                </div>

                                {/* Section Compétences du projet */}
                                {currentProject.competencies && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {currentProject.competencies.map((comp, idx) => (
                                            <div
                                                key={idx}
                                                className={`px-3 py-1 text-xs text-white rounded ${comp.color}`}
                                            >
                                                {comp.label}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Bouton "Plus d'info" */}
                                <button 
                                    onClick={() => setModalOpen(true)}
                                    className="mt-2 bg-primary text-darkPrimary px-4 py-1 rounded cursor-pointer">
                                    Plus d'info
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Flèche de droite */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 z-10 bg-dark text-darkPrimary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-[var(--color-darkPrimary)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M5 11h11.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H5v-2z" />
                    </svg>
                </button>
            </div>

            {/* Modal pour "Plus d'info" */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ProjectModal
                            project={currentProject}
                            onClose={() => setModalOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects;