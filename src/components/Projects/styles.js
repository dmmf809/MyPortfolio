import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const ProjectContainer = styled.div`
  background-color: transparent;
  padding-top: 70px;
`;

export const ProjectHeader = styled.h1`
  text-align: center;
  font-family: "Merriweather", serif;
  font-weight: 700;
  padding-bottom: 25px;
`;

export const ProjectCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProjCard = styled(Card)`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03);
    background-color: #fce6f8;
  }
`;
