import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Img, SkillsContainer, SkillsHeader, CardTitle } from './styles';
import { skills_data } from './skills-data';

const Skills = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <Fade right>
          <SkillsHeader>Technical Skills</SkillsHeader>
        </Fade>
        <Slide right cascade duration={1000}>
          <Row className='d-flex justify-content-md-around'>
            {/*Front-end*/}
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <CardTitle className='text-center'>Front-end</CardTitle>
                <hr />
                <Card.Text className='d-flex justify-content-center flex-row'>
                  {skills_data.frontend.map((techSkill, i) => (
                    <span className='p-2' key={`${techSkill.skillName}${i}`}>
                      <Img
                        src={techSkill.imgSrc}
                        alt={techSkill.imgAltText}
                        className='m-1'
                        rounded
                      />
                      {techSkill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/*Back-end*/}
            <Col md={6}>
              <Card className='focus mt-2 mb-2'>
                <Card.Body>
                  <CardTitle className='text-center'>Back-end</CardTitle>
                  <hr />
                  <Card.Text className='d-flex justify-content-center'>
                    {skills_data.backend.map((techSkill, i) => (
                      <span className='p-2' key={i}>
                        <Img
                          src={techSkill.imgSrc}
                          alt={techSkill.imgAltText}
                          className='m-1'
                          rounded
                        />
                        {techSkill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/*Version control*/}
            <Col md={6}>
              <Card className='focus mt-2 mb-2'>
                <Card.Body>
                  <CardTitle className='text-center'>Version Control</CardTitle>
                  <hr />
                  <Card.Text className='d-flex justify-content-center'>
                    {skills_data.versionControl.map((techSkill, i) => (
                      <span className='p-2' key={i}>
                        <Img
                          src={techSkill.imgSrc}
                          alt={techSkill.imgAltText}
                          className='m-1'
                          rounded
                        />
                        {techSkill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Slide>
      </SkillsContainer>
    </>
  );
};

export default Skills;
