import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar
      expand="sm"
      fixed="top"
      variant="dark"
      className="bg-nav bg-dark bg-opacity-25"
    >
      <Container>
        <BsNavbar.Toggle aria-controls="main-nav" className="ms-auto" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="mx-auto fs-5">
            <Nav.Link className="mx-2 text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" href="#aboutme">
              About
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" href="#work">
              Work
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
