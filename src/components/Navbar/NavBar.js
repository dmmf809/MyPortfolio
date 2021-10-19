import Navbar from 'react-bootstrap/Navbar';
import { MyNavbar, MyNavLinks, NavLinksContainer } from './styles';

const NavBar = () => {
  return (
    <MyNavbar sticky='top' variant='dark'>
      <Navbar.Collapse
        className='justify-content-end'
        id='resposive-navbar-nav'
      >
        <NavLinksContainer>
          <MyNavLinks href='#home'>Home</MyNavLinks>
          <MyNavLinks href='#about'>About</MyNavLinks>
          <MyNavLinks href='#skills'>Skills</MyNavLinks>
          <MyNavLinks href='#projects'>Projects</MyNavLinks>
          <MyNavLinks href='#contact'>Contact</MyNavLinks>
        </NavLinksContainer>
      </Navbar.Collapse>
    </MyNavbar>
  );
};

export default NavBar;
