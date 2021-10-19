import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export const SkillsContainer = styled.div`
  height: 800px;
  padding-top: 65px;
`;

export const SkillsHeader = styled.h1`
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`;

export const Img = styled(Image)`
  width: 5em;
`;

export const CardTitle = styled(Card.Title)`
  font-size: 2em;
  font-weight: 700;
`;
