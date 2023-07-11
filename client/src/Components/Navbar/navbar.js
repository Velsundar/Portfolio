import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Assets/Portfolio logo.png';
import  '../../Styles/Navbar.css'
const MyNavbar = () => {
  const linkStyles = {
    fontWeight: 'bold',
    fontSize: '28px',
    marginLeft: '15px',
    marginRight:'28px',
    fontFamily:'Times New Roman'
  };
  return (
    <Navbar bg="black" variant="dark" expand="lg" className='fixed-top'>
      <Navbar.Brand href="#home" className='logo-custom'>
        <img
          src={logo}
          width="200"
          height="80"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" style={linkStyles}>Home</Nav.Link>
          <Nav.Link href="#about" style={linkStyles}>About</Nav.Link>
          <Nav.Link href="#projects" style={linkStyles}>Projects</Nav.Link>
          <Nav.Link href="#skills" style={linkStyles}>Skills</Nav.Link>
          <Nav.Link href="#contact" style={linkStyles}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
