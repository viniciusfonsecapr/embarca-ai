import React from "react";
import { Container } from './styles'

export default function People(props) {

    const { people } = props;

    return (
        <Container>
            <div className="card-top">
                <div>{people.name}</div>
                <div>{people.eye_color}</div>
                <div>{people.gender}</div>
                <div>{people.hair_color}</div>
                <div>{people.height}</div>
                <div>{people.mass}</div>
                <div>{people.birth_year}</div>
                <div>{people.skin_color}</div>
            </div>


        </Container>
    );
}