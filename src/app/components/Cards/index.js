import React from 'react'
import { Container } from './styles'
import Pagination from "../Pagination";
import People from "../People"

export default function Cards(props) {
    const { people, loading, page, setPage, totalPages } = props;

    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const onRightClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <Container>
            <div className="header">
                <Pagination page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}></Pagination>
            </div>
            {loading ? (
                <h1>Loading.....</h1>
            ) : (
                <div className="people-grid">
                    {people &&
                        people.map((people, index) => {
                            return <People key={index} pokemon={people}></People>
                        })}
                </div>
            )}
        </Container>

    )
}