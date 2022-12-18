import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavHashLink } from "react-router-hash-link";

export const MyNavbar = styled(Navbar)`
  background-color: #4f5359;
  font-size: 1.2rem;
`;

export const MyNavLinks = styled(NavHashLink)`
  text-decoration: none;
  color: #cccaca;
  margin: 10px;

  &:hover {
    color: #ffaff0;
  }

  &:active {
    color: #ffaff0;
  }
`;

export const NavLinksContainer = styled(Nav)`
  padding-right: 20px;
`;
