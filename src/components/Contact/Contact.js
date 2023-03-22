import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  ContactContainer,
  ContactHeader,
  ContactImg,
  ImgWrapper,
} from "./style";
import Photo from "../../assets/pic/smile-bitmoji.png";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ImgWrapper>
          <ContactImg src={Photo} alt="Connect with me" />
        </ImgWrapper>
        <ContactHeader>Connect with me</ContactHeader>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:daeniellef1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="daeniellef1@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://ca.linkedin.com/in/daenielle-felipe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="daeniellef1@gmail.com">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/dmmf809"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My GitHub">
                  <i className="fab fa-github"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </ContactContainer>
    </>
  );
};

export default Contact;
