"use client";
import styled from "styled-components";

export const Container = styled.div`
  font-family: "Audiowide", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background-color: black;
  height: 100vh;

  @media (max-width: 968px) {
    background-color: black;
    height: 100%;
  }

  div.title-grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
  }

  div.people-grid {
    display: grid;
    flex-wrap: wrap;
    width: 180px;
    margin-left: 30px;
    margin-top: 50px;
    gap:30px;
    grid-template-columns: repeat(7, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 400px) {
      display: grid;
      width: 50vw;
      margin-left: 5px;
      margin-top: 50px;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);

     
    }
  }

  .divLoading {
    margin-top: -10%;
  }
`;
