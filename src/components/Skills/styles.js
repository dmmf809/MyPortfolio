import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export const SkillsContainer = styled.div`
  height: 800px;
  padding-top: 65px;

  @media (max-width: 415px) {
    height: 995px;
  }
`;

export const SkillsHeader = styled.h1`
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`;

export const Img = styled(Image)`
  width: 5em;

  @media (max-width: 415px) {
    width: 2em;
  }
`;

export const CardTitle = styled(Card.Title)`
  font-size: 2em;
  font-weight: 700;
`;

export const CardText = styled(Card.Text)`
  justify-content: center;

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;
