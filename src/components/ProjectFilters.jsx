// ProjectFilters.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const filtersData = [
  { label: "Réaliser", color: "bg-darkRed", definition: "Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client." },
  { label: "Optimiser", color: "bg-lightOrange", definition: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources…" },
  { label: "Administrer", color: "bg-darkYellow", definition: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation." },
  { label: "Gérer", color: "bg-hulkGreen", definition: "Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise." },
  { label: "Conduire", color: "bg-darkBlue", definition: "Satisfaire les besoins utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles." },
  { label: "Collaborer", color: "bg-black", definition: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique." },
];

function FilterModal({ filter, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fond semi-transparent pour le modal */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="relative bg-lightDark p-6 rounded z-10 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">{filter.label}</h2>
        <p className="mb-4">{filter.definition}</p>
        <button
          onClick={onClose}
          className="bg-primary text-darkPrimary px-4 py-2 rounded hover:bg-opacity-90 cursor-pointer"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

function ProjectFilters() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleCloseModal = () => {
    setSelectedFilter(null);
  };

  return (
    <div className="max-w-7xl mx-auto w-full mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {filtersData.map((filter) => (
          <motion.button
            key={filter.label}
            whileHover={{ scale: 1.05 }}
            className={`text-white px-4 py-2 rounded shadow ${filter.color} cursor-pointer`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
      {selectedFilter && (
        <FilterModal filter={selectedFilter} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ProjectFilters;