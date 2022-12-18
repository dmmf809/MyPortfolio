import Typewriter from "typewriter-effect";
import {
  HeroContainer,
  HeroText,
  TypeWriterContainer,
  HeroNav,
  ButtonTitle,
  CarouselImg,
  HeroBg,
} from "./styles";
import Slide1 from "../../assets/carousel/slide1.png";
import Slide2 from "../../assets/carousel/slide2.png";
import Slide3 from "../../assets/carousel/slide3.png";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <Carousel controls={false} interval={3000} pause>
            <Carousel.Item>
              <CarouselImg className="d-block" src={Slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg
                className="d-block w-100"
                src={Slide2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg
                className="d-block w-100"
                src={Slide3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </HeroBg>
        <HeroText>
          Hello, I'm <br />
          <span>
            <strong>Daenielle May</strong>
          </span>
          <TypeWriterContainer>
            <Typewriter
              options={{
                strings: ["Web Developer", "Learner", "Designer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </TypeWriterContainer>
          <HeroNav className="justify-content-center">
            <ButtonTitle to="#about">About</ButtonTitle>
            <ButtonTitle to="#skills">Skills</ButtonTitle>
            <ButtonTitle to="#projects">Projects</ButtonTitle>
          </HeroNav>
        </HeroText>
      </HeroContainer>
    </>
  );
};

export default Hero;
