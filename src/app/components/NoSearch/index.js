import React from 'react';
import './style.css';

const NoCharacters = () => {
    return (

        <div className="no-characters-container">
            <div className="no-characters-icon">😢</div>
            <h2 className="no-characters-message">Nenhum personagem encontrado</h2>
            <p className="no-characters-subtext">Tente novamente ou refine sua busca.</p>
        </div>

    );
};

export default NoCharacters;
