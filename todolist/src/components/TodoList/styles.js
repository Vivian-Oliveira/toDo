import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  border-radius: 4px;
  padding: 5px;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  `;


export const Card = styled.div`
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 50px 10px;
  margin: 18px 40px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
`;
