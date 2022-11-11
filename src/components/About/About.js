import {
  AboutContainer,
  AboutWrapper,
  AboutHeader,
  ImgContainer,
  AboutDescription,
  AboutItems,
  AboutImg,
  AboutButton,
  ViewWork,
  View,
  Btn,
} from "./styles";
import Photo from "../../assets/pic/hi.png";
import ViewImg from "../../assets/pic/view.png";
const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutHeader>Who I am</AboutHeader>
        <AboutWrapper>
          <AboutItems>
            <ImgContainer>
              <AboutImg src={Photo} alt="Profile Photo" thumbnail fluid />
            </ImgContainer>
            <AboutDescription>
              <p>
                I'm a Web Developer who loves turning ideas into something that
                is both useful and interactive.
              </p>
              <p>
                I have successfully completed my skills as a developer through
                SAIT's Information Technology course and currently expanding my
                knowledge as a web develoer through SAIT’s Web Developer
                Certificate program.
              </p>
              <p>
                My goal is to provide fast, interactive, and responsive
                websites.
              </p>
            </AboutDescription>
          </AboutItems>
        </AboutWrapper>
        <View>
          <ViewWork src={ViewImg} alt="Profile Photo" thumbnail fluid />
          <AboutButton href="#projects">
            <Btn className="m-2" variant="outline-dark">
              View work &rarr;
            </Btn>
          </AboutButton>
        </View>
      </AboutContainer>
    </>
  );
};

export default About;
