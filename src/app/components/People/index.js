"use client"
import React from "react";
import { Container } from "./styles";

export default function People(props) {
    const { people } = props;

    return (
        <Container>
            <div className="card-top">
                <div className="name-character">{people.name}</div>
                <div className="subtitle-character">Genero: {people.gender}</div>
                <div className="subtitle-character">Altura: {people.height}</div>
                <div className="subtitle-character">Peso: {people.mass}</div>
                <div className="subtitle-character">Aniversario: {people.birth_year}</div>
                <div className="subtitle-character">Cor dos Olhos:{people.eye_color}</div>
                <div className="subtitle-character">Cor do Cabelo:{people.hair_color}</div>
                <div className="subtitle-character">Cor da Pele:{people.skin_color}</div>
                <div className="subtitle-character">Especie: {people.species}</div>
                <div className="subtitle-character">Planeta:{people.homeWorld}</div>

            </div>
        </Container>
    );
}
