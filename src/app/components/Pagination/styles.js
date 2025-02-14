import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
  
  button {
    cursor: pointer;
    background-color: #1D1E1F;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 12px 24px;
  }

  button:hover {
    cursor: pointer;
    scale: 1.07;
  }

  .buttons-page{
    margin-left: 20px;
  }
`;