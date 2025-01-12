"use client"
import React from 'react';
import { Container } from './styles';
import Pagination from '../Pagination';
import People from '../People';
import LoadingSpinner from '../Loading'
export default function Cards({ people, loading, next, prev }) {
    return (
        <Container>
            <div className="header">
                <Pagination onLeftClick={prev} onRightClick={next} />
            </div>
            <div className='title-grid'>
                PERSONAGENS
            </div>
            {loading ? (
                <div className='divLoading'>
                    <LoadingSpinner />
                </div>

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