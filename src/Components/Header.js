import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div style={{ backgroundColor: "#007462" }}>
      <div className="container" style={{ marginBottom: "70px" }}>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="lg"
          varient="dark"
          style={{ backgroundColor: "#007462", height: "70px" }}
        >
          <Container>
            <Nav.Link href="/" style={{ color: "#ffffff", fontSize: "24px" }}>
              Home
            </Nav.Link>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ backgroundColor: "#eee" }}
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ backgroundColor: "#007462", padding: "20px" }}
            >
              <Nav className="ml-auto">
                <Nav.Link href="/about" style={{ color: "#ffffff" }}>
                  About
                </Nav.Link>
                <Nav.Link href="/work-experience" style={{ color: "#ffffff" }}>
                  Work Experience
                </Nav.Link>
                <Nav.Link href="/projects" style={{ color: "#ffffff" }}>
                  Projects
                </Nav.Link>
                <Nav.Link href="/contact" style={{ color: "#ffffff" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
