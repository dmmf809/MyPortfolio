import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const ProjectContainer = styled.div`
  background-color: transparent;
  padding-top: 65px;
`;

export const ProjectWrapper = styled.div`
  height: 100%;
`;

export const ProjectHeader = styled.h1`
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  padding-bottom: 25px;
`;

export const ProjectCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardImg = styled(Card.Img)`
  &:hover {
    transform: scale(1);
  }
`;
