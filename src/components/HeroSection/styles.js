import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 995px;
  position: relative;

  @media (max-width: 1620px) {
    height: 800px;
  }

  @media (max-width: 1300px) {
    height: 750px;
  }
`;

export const HeroBg = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

export const HeroText = styled.h1`
  position: absolute;
  color: #ffff;
  width: 100%;
  z-index: 1;
  text-align: center;
  font-size: 50px;
  font-family: 'Karla', sans-serif;
  letter-spacing: 7px;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 100;

  strong {
    font-size: 1.25em;
    color: #ffaff0;
  }
`;

export const TypeWriterContainer = styled.div`
  margin-top: 10px;
  font-size: 25px;
  letter-spacing: 4px;
  color: #ffaff0;
`;

export const HeroNav = styled(Nav)`
  margin-top: 3%;
`;

export const ButtonTitle = styled(Nav.Link)`  margin: 0 2%;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    color: #ffff;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #FFAFF0;
        background-color: transparent;
        color: #e9c3fa;
        transform
    }`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fir: cover;
`;
