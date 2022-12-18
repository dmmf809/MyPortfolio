import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { NavHashLink } from "react-router-hash-link";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export const HeroBg = styled.div`
  width: 100%;
  z-index: 100;
`;

export const HeroText = styled.h1`
  position: absolute;
  color: #ffff;
  width: 100%;
  z-index: 100;
  text-align: center;
  font-size: 3.5em;
  font-family: "Karla", sans-serif;
  letter-spacing: 7px;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 100;

  strong {
    font-size: 1.25em;
    color: #ffaff0;
  }

  @media (max-width: 40em) {
    font-size: 2.5em;
  }
`;

export const Labels = styled.p`
  margin-top: 10px;
  font-size: 15px;
  letter-spacing: 4px;
  color: #ebd3e8;
`;

export const TypeWriterContainer = styled.div`
  margin-top: 10px;
  font-size: 25px;
  letter-spacing: 4px;
  color: #ffaff0;

  @media (max-width: 415px) {
    font-size: 15px;
  }
`;

export const HeroNav = styled(Nav)`
  margin-top: 3%;

  @media (max-width: 415px) {
    display: none;
  }
`;

export const ButtonTitle = styled(NavHashLink)`
  margin: 0 2%;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  border-radius: 0;
  color: #ffff;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #ffaff0;
    background-color: transparent;
    color: #e9c3fa;
  }
`;

export const CarouselImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
