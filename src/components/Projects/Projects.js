import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectHeader,
  CardImg,
} from './styles';
import Project1 from '../../assets/projects/rental.png';
import Project2 from '../../assets/projects/webflix.png';
import Project3 from '../../assets/projects/amazon-clone.png';
import Project4 from '../../assets/projects/restaurant.png';

const Projects = () => {
  return (
    <>
      <ProjectContainer id='projects'>
        <ProjectWrapper>
          <ProjectHeader>Projects</ProjectHeader>
          <Row xs={1} md={2} className='g-4'>
            <Col>
              <Card>
                <CardImg variant='top' src={Project3} />
                <Card.Body>
                  <Card.Title>Amazon Clone</Card.Title>
                  <Card.Text>
                    Replicated Amazon.ca website with full e-commerce
                    functionality such as account sign-in and register using
                    Firebase authentication, checkout page, and real payments
                    using Stripe JS.
                  </Card.Text>
                  <Button
                    variant='primary'
                    href='https://clone-83b6b.web.app/'
                    target='_blank'
                  >
                    View Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg variant='top' src={Project2} />
                <Card.Body>
                  <Card.Title>Webflix</Card.Title>
                  <Card.Text>
                    This is a React based website that sends an API request to
                    retrieve movies and TV series information and displays the
                    fetched data through a responsive user interface using
                    Material-UI.
                  </Card.Text>
                  <Button
                    variant='primary'
                    href='https://dmmf809.github.io/Webflix/'
                    target='_blank'
                  >
                    View Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg variant='top' src={Project1} />
                <Card.Body>
                  <Card.Title>Dodgy Brakes Car Rental</Card.Title>
                  <Card.Text>
                    This React based website filters the clients based on the
                    search parameter and displays their information. It
                    calculates the total rent amount of the vehicle chosen for a
                    specified client.
                  </Card.Text>
                  <Button
                    variant='primary'
                    href='https://dmmf809.github.io/CarRental/'
                    target='_blank'
                  >
                    View Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImg variant='top' src={Project4} />
                <Card.Body>
                  <Card.Title>City Delicatessen</Card.Title>
                  <Card.Text>
                    Craving for pizza? This React based landing page makes the
                    user crave for pizza for its eye-catching user interface.
                  </Card.Text>
                  <Button
                    variant='primary'
                    href='https://dmmf809.github.io/CityDelicatessen/'
                    target='_blank'
                  >
                    View Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
