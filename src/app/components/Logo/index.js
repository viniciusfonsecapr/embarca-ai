"use client"
import React from 'react';

const GuerraNasEstrelasLogo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: 'block', margin: '0 auto' }}
    >
        {/* Fundo transparente para melhor adaptação */}
        <rect width="200" height="100" fill="none" />

        {/* Texto principal em tamanho reduzido e centralizado */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            fontFamily="'Arial Black', sans-serif" fontSize="12" fill="yellow"
            stroke="black" strokeWidth="1">
            GUERRAS NAS ESTRELAS
        </text>

        {/* Bordas adicionais ajustadas ao tamanho menor */}
        <rect x="10" y="10" width="180" height="80" fill="none" stroke="yellow" strokeWidth="2" />
    </svg>
);

export default GuerraNasEstrelasLogo;
