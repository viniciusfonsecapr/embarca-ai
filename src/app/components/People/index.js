"use client"
import React from "react";
import { Container } from "./styles";

export default function People(props) {
    const { people } = props;

    return (
        <Container>
            <div className="card-top">
                <div className="name-character">{people.name}</div>
                <div>Genero: {people.gender}</div>
                <div>Altura: {people.height}</div>
                <div>Peso: {people.mass}</div>
                <div>Aniversario: {people.birth_year}</div>
                <div>Cor dos Olhos:{people.eye_color}</div>
                <div>Cor do Cabelo:{people.hair_color}</div>
                <div>Cor da Pele:{people.skin_color}</div>
                <div>Especie: {people.species}</div>
                <div>Planeta:{people.homeWorld}</div>

            </div>
        </Container>
    );
}
