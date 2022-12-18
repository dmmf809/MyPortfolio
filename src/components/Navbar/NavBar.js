import Navbar from "react-bootstrap/Navbar";
import { MyNavbar, MyNavLinks, NavLinksContainer } from "./styles";

const NavBar = () => {
  return (
    <MyNavbar sticky="top" variant="dark">
      <Navbar.Collapse
        className="justify-content-end"
        id="resposive-navbar-nav"
      >
        <NavLinksContainer>
          <MyNavLinks smooth to="#home">
            Home
          </MyNavLinks>
          <MyNavLinks smooth to="#about">
            About
          </MyNavLinks>
          <MyNavLinks smooth to="#skills">
            Skills
          </MyNavLinks>
          <MyNavLinks smooth to="#projects">
            Projects
          </MyNavLinks>
          <MyNavLinks smooth to="#contact">
            Contact
          </MyNavLinks>
        </NavLinksContainer>
      </Navbar.Collapse>
    </MyNavbar>
  );
};

export default NavBar;
