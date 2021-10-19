import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

export const AboutContainer = styled.div`
  background-color: transparent;
  padding-top: 65px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
`;

export const AboutHeader = styled.h1`
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutImg = styled(Image)`
  max-width: 18em;
  background-color: transparent;
  border: none;
`;

export const AboutDescription = styled.div`
  color: #000;
  padding: 50px;

  background-color: #f8f5fa;
`;
export const AboutButton = styled(Nav.Link)`
  margin-top: 2%;
`;
