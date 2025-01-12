"use client";
import styled from "styled-components";
// import Image from '../../images/stars.jpg'

export const Container = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background-color: black; 
  height: 100vh;

  div.people-grid {
    display: grid;
    width: 180px;
    margin-left: 50px;
    margin-top: 50px;
    gap: 60px;
    grid-template-columns: repeat(7, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .header{
    padding-top: 10px;
  }

 .divLoading{
    margin-top: -10%;
 }
`;
