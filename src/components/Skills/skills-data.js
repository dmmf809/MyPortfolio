import BOOTSRAP_ICON from '../../assets/skills/bootstrap-4.svg';
import REACTBTSRP_ICON from '../../assets/skills/react-bootstrap.svg';
import CSS_ICON from '../../assets/skills/css3.svg';
import HTML_ICON from '../../assets/skills/html-5.svg';
import NODE_ICON from '../../assets/skills/nodejs.svg';
import JAVASCRIPT_ICON from '../../assets/skills/javascript.svg';
import MYSQL_ICON from '../../assets/skills/mysql.svg';
import REACT_ICON from '../../assets/skills/react.svg';
import STYLED_ICON from '../../assets/skills/styled-components.svg';
import GIT_ICON from '../../assets/skills/git-icon.svg';

export const skills_data = {
  frontend: [
    {
      imgAltText: 'HTML 5',
      imgSrc: HTML_ICON,
      skillName: 'HTML5',
    },
    {
      imgAltText: 'CSS 3',
      imgSrc: CSS_ICON,
      skillName: 'CSS3',
    },
    {
      imgAltText: 'JavaScript',
      imgSrc: JAVASCRIPT_ICON,
      skillName: 'JavaScript',
    },
    {
      imgAltText: 'Bootstrap',
      imgSrc: BOOTSRAP_ICON,
      skillName: 'Bootstrap',
    },
    {
      imgAltText: 'React',
      imgSrc: REACT_ICON,
      skillName: 'React',
    },
    {
      imgAltText: 'React Bootstrap',
      imgSrc: REACTBTSRP_ICON,
      skillName: 'React Bootstrap',
    },
    {
      imgAltText: 'styled-component',
      imgSrc: STYLED_ICON,
      skillName: 'styled-component',
    },
  ],

  backend: [
    {
      imgAltText: 'Node.js',
      imgSrc: NODE_ICON,
      skillName: 'Node.js',
    },
  ],

  versionControl: [
    {
      imgAltText: 'GIT',
      imgSrc: GIT_ICON,
      skillName: 'GIT',
    },
  ],
};
