"use client"
import React from 'react';
import { Container } from './styles';
import Pagination from '../Pagination';
import People from '../People';

export default function Cards({ people, loading, next, prev }) {
    return (
        <Container>
            <div className="header">
                <Pagination onLeftClick={prev} onRightClick={next} />
            </div>
            {loading ? (
                <h1>Carregando...</h1>
            ) : (
                <div className="people-grid">
                    {people && people.map((person, index) => (
                        <People key={index} people={person} />
                    ))}
                </div>
            )}
        </Container>
    );
}


// import React from 'react'
// import { Container } from './styles'
// import Pagination from "../Pagination";
// import People from "../People"

// export default function Cards(props) {
//     const { people, loading, page, setPage, totalPages, next, prev } = props;


//     const onLeftClickHandler = () => {
//         if (page > 0) {
//             setPage(page - 1);
//             people(prev)
//         }
//     };

//     const onRightClickHandler = () => {
//         if (page + 1 !== totalPages) {
//             setPage(page + 1);
//             people(next)

//         }
//     };

//     return (
//         <Container>
//             <div className="header">
//                 <Pagination page={page + 1}
//                     totalPages={totalPages}

//                     onLeftClick={onLeftClickHandler}
//                     onRightClick={onRightClickHandler}></Pagination>
//             </div>
//             {loading ? (
//                 <h1>Loading.....</h1>
//             ) : (
//                 <div className="people-grid">
//                     {people &&
//                         people.map((people, index) => {
//                             return <People key={index} people={people}></People>
//                         })}
//                 </div>
//             )}
//         </Container>

//     )
// }