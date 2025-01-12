"use client"
import React from "react";
import { Container } from "./styles";


export default function Pagination(props) {
    const { page, totalPages, onLeftClick, onRightClick } = props;
    return (
        <Container>
            <button onClick={onLeftClick}>PREV</button>
            <div className="buttons-page">
                {page}
            </div>
            <div className="buttons-page">
                {totalPages}
            </div>
            <button onClick={onRightClick}>NEXT</button>
        </Container>
    );
}