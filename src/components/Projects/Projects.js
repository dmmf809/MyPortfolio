import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectContainer, ProjectHeader, CardImg } from "./styles";
import { projects } from "./projects-data";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectHeader>Personal Projects</ProjectHeader>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              {projects.project1.map((proj) => (
                <>
                  <CardImg variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </Card>
          </Col>
          <Col>
            <Card>
              {projects.project2.map((proj) => (
                <>
                  <CardImg variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </Card>
          </Col>
          <Col>
            <Card>
              {projects.project3.map((proj) => (
                <>
                  <CardImg variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </Card>
          </Col>

          <Col>
            <Card>
              {projects.project4.map((proj) => (
                <>
                  <CardImg variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </Card>
          </Col>
        </Row>
      </ProjectContainer>
    </>
  );
};

export default Projects;
