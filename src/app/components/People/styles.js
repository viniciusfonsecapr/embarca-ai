import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: #1d1e1f;

  @media (max-width: 400px) {
    
  }

  .card-top {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .subtitle-character {
    font-size: 14px;
    color: #fafa73;
    font-weight: 800;
    font-family: "Audiowide", serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
  }

  div.card-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffff00;
    width: 200px;
    height: 280px;
    gap: 2px;
    margin-bottom: 10px;
  }

  div.card-top:hover {
    scale: 1.05;
    cursor: pointer;
  }

  .name-character {
    margin-top: 5px;
    margin-bottom: 25px;
    font-size: 18px;
    font-family: "Audiowide", serif;
    font-weight: 800;
    font-style: normal;
  }
`;
