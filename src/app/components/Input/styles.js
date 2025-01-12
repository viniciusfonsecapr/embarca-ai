import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  color: white;
  padding: 40px;
  font-family: "Audiowide", serif;
  font-weight: 400;
  font-style: normal;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  input {
    width:50vw;
    background-color: #1D1E1F;
    padding-left: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    height: 50px;
  }

  button {
    display: flex;
    background-color: #1D1E1F;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 50px;
    margin-top: 20px;
    border-radius: 5px;
;
  }

  button:hover {
    scale: 1.1;
  }

  
`;
