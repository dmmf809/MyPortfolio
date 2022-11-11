import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

export const AboutContainer = styled.div`
  background-color: transparent;
  padding-top: 45px;
  height: 90vh;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

export const AboutHeader = styled.h1`
  margin-top: 1em;
  text-align: center;
  font-family: "Merriweather", serif;
  font-weight: 700;
`;

export const ImgContainer = styled.div`
  @media (max-width: 40em) {
    margin: 0 1em 0 0;
  }
`;

export const AboutImg = styled(Image)`
  width: 25em;
  background-color: transparent;
  border: none;

  @media (max-width: 40em) {
    display: none;
  }
`;

export const AboutItems = styled.div`
  display: flex;
`;

export const AboutDescription = styled.div`
  font-size: 1.2em;
  max-width: 60ch;
  color: #000;
  padding: 50px;

  background-color: #f8f5fa;

  @media (max-width: 40em) {
    font-size: 1em;
    padding: 30px;
  }
`;

export const View = styled.div`
  @media (max-width: 40em) {
    display: flex;
  }
`;

export const ViewWork = styled(Image)`
  display: none;

  @media (max-width: 40em) {
    display: inline-block;
    background-color: transparent;
    border: none;
    height: 12em;
    width: auto;
  }
`;

export const AboutButton = styled(Nav.Link)`
  display: flex;
  justify-content: flex-end;
  padding-right: 5em;
  margin-top: 2%;

  @media (max-width: 40em) {
    align-self: flex-start;
    padding: 0;
    padding-left: 3em;
    font-size: 0.81em;
  }
`;

export const Btn = styled(Button)`
  @media (max-width: 40em) {
    font-size: 0.89em;
  }
`;
