"use client"
import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;


  h1 {
    color: white;
  }

  div.people-grid {
    display: grid;
    width: 180px;
    margin: 30px;
    gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;