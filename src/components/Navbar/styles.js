import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const MyNavbar = styled(Navbar)`
  background-color: #4f5359;
  font-size: 1.2rem;
`;

export const MyNavLinks = styled(Nav.Link)`
  &:active {
    color: #ffaff0;
  }
`;

export const NavLinksContainer = styled(Nav)`
  padding-right: 20px;
`;
