import React from 'react';

function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Fond semi-transparent pour fermer la modal en cliquant dessus */}
            <div className="absolute inset-0 bg-clearDark" onClick={onClose} />
            <div className="relative bg-lightDark text-primary p-6 rounded max-w-2xl w-full z-10 overflow-y-auto max-h-full">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover mb-4 rounded"
                />
                <p className="text-lg mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((lang) => (
                        <span
                            key={lang}
                            className="bg-gray-800 bg-opacity-70 px-2 py-1 text-xs rounded"
                        >
                            {lang}
                        </span>
                    ))}
                    {project.competencies && project.competencies.map((comp, idx) => (
                        <span
                            key={idx}
                            className={`px-3 py-1 text-xs text-white rounded ${comp.color}`}
                        >
                            {comp.label}
                        </span>
                    ))}
                </div>
                <p className="text-sm">{project.description}</p>

                <div className="flex justify-end mt-4 gap-4">
                    {project.github && project.github !== "" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-darkPrimary text-white px-4 py-2 rounded cursor-pointer"
                        >
                            Github
                        </a>
                    )}
                    <button
                        onClick={onClose}
                        className="bg-primary text-darkPrimary px-4 py-2 rounded cursor-pointer"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;