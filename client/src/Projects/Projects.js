import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import zomatoProj from '../Assets/Zomato_Project.png'
import CRUDproj from '../Assets/CRUD_Proj.png';
import Teleproj from '../Assets/TELENET_Proj.png';
import Cominsoon from '../Assets/Coming_Soon_image.jpg';

const Projects = () => {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative' }} id='projects' className='w-100'>
      <Container>
        <Row>
          <Col>
            <h1 style={{ marginTop: '100px', color: 'white' }}>
              <u>Projects</u>
            </h1>
            <p style={{ color: 'white' }}>I have worked with the following technologies.</p>
          </Col>
        </Row>
        <Row className='cards_main justify-content-center align-items-center'>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 19px 2px red', cursor: 'pointer' }} className='cards'>
              <Card.Img variant='top' src={zomatoProj} className='cardImage' />
              <Card.Body>
                <Card.Title className='text-white'>Zomator Clone</Card.Title>
                <Card.Title className='text-white'>
                  <a href='#git' className='card-link'>Source Code</a>
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
                  <a href='#git' className='card-link'>Source Code</a>
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
                  <a href='#git' className='card-link'>Source Code</a>
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