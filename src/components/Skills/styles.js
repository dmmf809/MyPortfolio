import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export const SkillsContainer = styled.div`
  padding-top: 35px;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  width: 100%;
`;

export const SkillsHeader = styled.h1`
  text-align: center;
  font-family: "Merriweather", serif;
  font-weight: 700;
`;

export const ImgContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin: 1em;

  @media (max-width: 40em) {
    width: 6em;
  }
`;

export const Img = styled(Image)`
  width: auto;
  height: 130px;

  @media (max-width: 40em) {
    width: auto;
    height: 90px;
  }
`;

export const CardTitle = styled(Card.Title)`
  font-size: 2em;
  font-weight: 700;
`;

export const CardText = styled(Card.Text)`
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;
