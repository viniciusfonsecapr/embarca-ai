import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  color: black;
  padding: 40px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 300px;
    background-color: blue;
    padding-left: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    height: 50px;
  }

  button {
    display: flex;
    background-color: yellow;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border-radius: 5px;
  }

  
`;
