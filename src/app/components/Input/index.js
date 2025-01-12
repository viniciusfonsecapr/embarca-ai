import React, { useState } from "react";
import { Container } from "./styles";

export default function Searchbar(props) {
    const [search, setSearch] = useState("");
    const { onSearch } = props;

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value === 0) {
            onSearch(undefined)
        }

    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }


    return (
        <Container>
            <div className="input-people">
                <input placeholder="Digite o Nome do Personagem ..." onChange={onChangeHandler} />
            </div>
            <div className="button-people">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </Container>
    );
}