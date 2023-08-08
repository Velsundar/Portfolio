import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import zomatoProj from '../Assets/Zomato_Project.png'
import CRUDproj from '../Assets/CRUD_Proj.png';
import Teleproj from '../Assets/TELENET_Proj.png';
import JWT_Auth from '../Assets/JWT_Auth.png';
import Seat_allo from '../Assets/Seat_Allocation.png'
import Cominsoon from '../Assets/Coming_Soon_image.jpg';

const Projects = () => {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative' }} id='projects' className='w-100'>
      <Container>
        <Row>
          <Col>
            <h1 style={{ marginTop: '100px', color: 'white' }}>
              <u style={{fontFamily:"stylish"}}>Projects</u>
            </h1>
            <p style={{ color: 'white' }}>Take a look at some of my works.</p>
          </Col>
        </Row>
        <Row className='cards_main justify-content-center align-items-center'>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 19px 2px red', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={zomatoProj} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white' >Zomato Clone</Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://github.com/Velsundar/Zomato_Clone'target='_blank'rel="noreferrer" className='card-link'>Source Code</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px green', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={CRUDproj} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>CRUD Operations</Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://github.com/Velsundar/CRUD_Operations'target='_blank'rel="noreferrer" className='card-link'>Source Code</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px white', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={Teleproj} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>TeleNet IT Consultant</Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://github.com/Velsundar/TeleNet-IT-Consultant-Page'target='_blank'rel="noreferrer" className='card-link'>Source Code</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px white', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={JWT_Auth} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>JWT_Authentication</Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://github.com/Velsundar/Elansol_TEch_JWT_Auth_Token'target='_blank'rel="noreferrer" className='card-link'>Source Code</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px blue', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={Seat_allo} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>Bus Seat Booking</Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://github.com/Velsundar/Seat_Booking_bus'target='_blank'rel="noreferrer" className='card-link'>Source Code</a>
                </Card.Title>
                <Card.Title className='text-white'>
                  <a href='https://seat-allocation.netlify.app/'target='_blank'rel="noreferrer" className='card-link'>Live Demo</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px white', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={Cominsoon} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>Ongoing</Card.Title>
                <Card.Title className='text-white'>
                  <a href='#git' className='card-link'>Source Code</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;