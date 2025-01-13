"use client";
import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

People.propTypes = {
    people: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        birth_year: PropTypes.string,
        eye_color: PropTypes.string,
        hair_color: PropTypes.string,
        skin_color: PropTypes.string,
        species: PropTypes.string,
        homeWorld: PropTypes.string,
    }).isRequired,
};

People.defaultProps = {
    people: {
        gender: "Desconhecido",
        height: "Desconhecida",
        mass: "Desconhecido",
        birth_year: "Desconhecido",
        eye_color: "Desconhecida",
        hair_color: "Desconhecido",
        skin_color: "Desconhecida",
        species: "Desconhecida",
        homeWorld: "Desconhecido",
    },
};

export default function People(props) {
    const { people } = props;

    return (
        <Container>
            <div className="card-top">
                {people.name && <div className="name-character">{people.name}</div>}
                {people.gender && (
                    <div className="subtitle-character">Gênero: {people.gender}</div>
                )}
                {people.height && (
                    <div className="subtitle-character">Altura: {people.height} cm</div>
                )}
                {people.mass && (
                    <div className="subtitle-character">Peso: {people.mass} kg</div>
                )}
                {people.birth_year && (
                    <div className="subtitle-character">
                        Aniversário: {people.birth_year}
                    </div>
                )}
                {people.eye_color && (
                    <div className="subtitle-character">
                        Cor dos Olhos: {people.eye_color}
                    </div>
                )}
                {people.hair_color && (
                    <div className="subtitle-character">
                        Cor do Cabelo: {people.hair_color}
                    </div>
                )}
                {people.skin_color && (
                    <div className="subtitle-character">
                        Cor da Pele: {people.skin_color}
                    </div>
                )}
                {people.species && (
                    <div className="subtitle-character">Espécie: {people.species}</div>
                )}
                {people.homeWorld && (
                    <div className="subtitle-character">Planeta: {people.homeWorld}</div>
                )}
            </div>
        </Container>
    );
}
