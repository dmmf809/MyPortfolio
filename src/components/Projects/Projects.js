import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectContainer, ProjectHeader, ProjCard } from "./styles";
import { projects } from "./projects-data";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectHeader>Personal Projects</ProjectHeader>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <ProjCard>
              {projects.project1.map((proj) => (
                <>
                  <Card.Img variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </ProjCard>
          </Col>
          <Col>
            <ProjCard>
              {projects.project2.map((proj) => (
                <>
                  <Card.Img variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </ProjCard>
          </Col>
          <Col>
            <ProjCard>
              {projects.project3.map((proj) => (
                <>
                  <Card.Img variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </ProjCard>
          </Col>

          <Col>
            <ProjCard>
              {projects.project4.map((proj) => (
                <>
                  <Card.Img variant="top" src={proj.img} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant="primary" href={proj.link} target="_blank">
                      View Website
                    </Button>
                  </Card.Body>
                </>
              ))}
            </ProjCard>
          </Col>
        </Row>
      </ProjectContainer>
    </>
  );
};

export default Projects;
