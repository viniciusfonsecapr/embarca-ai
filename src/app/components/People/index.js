import React from "react";
import { Container } from './styles'

export default function People(props) {

    const { people } = props

    return (
        <Container>
            <div className="card-top">
                <div>{people}</div>

            </div>


        </Container>
    );
}