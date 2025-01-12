import styled from "styled-components";

export const Container = styled.div`
  
  border-radius: 10px;
  background-color: #1D1E1F;
  color: white;

  div.card-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 200px;
    height: 280px;
    gap: 2px;
   margin-bottom: 10px;
  }

  div.card-top:hover {
    scale:1.05;
    cursor: pointer;
  }
 
 .name-character{
  margin-top: 5px;
   margin-bottom: 25px;
    font-size: 20px;
    font-weight: 800;
  
 }
`;