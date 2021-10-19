import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  AboutContainer,
  AboutWrapper,
  AboutHeader,
  AboutDescription,
  ImgContainer,
  AboutImg,
  AboutButton,
} from './styles';
import Photo from '../../assets/pic/me.png';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutHeader>Who I am</AboutHeader>
        <AboutWrapper>
          <Container fluid>
            <Col>
              <ImgContainer>
                <AboutImg src={Photo} alt='Profile Photo' thumbnail fluid />
              </ImgContainer>
            </Col>
            <Col>
              <AboutDescription>
                I'm a Web Developer who loves turning ideas into something that
                is both useful and interactive. I have successfully completed my
                skills as a developer through SAIT's Information Technology
                course. I developed this portfolio-website using React as my
                framework and React Bootstrap for the UI foundation. My goal is
                to provide fast, interactive, and responsive websites.
              </AboutDescription>
              <Row>
                <Col className='d-flex justify-content-end flex-wrap'>
                  <AboutButton href='#projects'>
                    <Button className='m-2' variant='outline-dark'>
                      View my work &rarr;
                    </Button>
                  </AboutButton>
                </Col>
              </Row>
            </Col>
          </Container>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
