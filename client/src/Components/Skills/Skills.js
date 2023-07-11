import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFiletypeCss } from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { BiLogoPostgresql } from 'react-icons/bi';

const Skills = () => {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative' }} id='skills' className='w-100'>
      <Container>
        <Row>
          <Col>
            <h1 style={{ marginTop: '100px', color: 'white' }}>
              <u>Skills</u>
            </h1>
            <p style={{ color: 'white' }}>I have worked with the following technologies.</p>
          </Col>
        </Row>
        <Row className='cards_main justify-content-center align-items-center'>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 19px 2px orange', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'orange'}}>HTML <AiFillHtml5/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px blue', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title className='text-primary'>CSS <BsFiletypeCss/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px yellow', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'yellow'}}>JavaScript <SiJavascript/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px skyblue', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'skyblue'}}>ReactJs <FaReact/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px purple', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'purple'}}>Bootstrap <FaBootstrap/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px skyblue', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'skyblue'}}>Tailwind <SiTailwindcss/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px #7FFFD4', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'#7FFFD4'}}>NodeJS <IoLogoNodejs/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px #6F4E37', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'#6F4E37'}}>MongoDB <SiMongodb/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px #89CFF0 ', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'#89CFF0'}}>SQL <BiLogoPostgresql/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} md={4} lg={2}>
            <Card style={{ backgroundColor: 'transparent', boxShadow: '0px 0px 15px 4px gray', cursor: 'pointer' }} className='cards'>
              <Card.Body className='mx-auto'>
                <Card.Title style={{color:'gray'}}>GitHub <BsGithub/></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills;
