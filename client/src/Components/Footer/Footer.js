import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }} className='py-5'>
    <hr style={{width:'90%',height:'6px',marginLeft:'25px',backgroundColor:'whitesmoke'}}/>
            <div><h1 style={{marginLeft:'45px'}}>Enquire now</h1></div>
      <Container>
        <Row>
          <Col lg={6}>
            <Form action="https://getform.io/f/e76f1b0e-01a1-4b2c-b933-8c2a9195536f" method="post">
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' />
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
              </Form.Group>

              <Form.Group controlId='number'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='tel' placeholder='Enter your phone number' />
              </Form.Group>

              <Form.Group controlId='message'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder='Enter your message' />
              </Form.Group>

              <Button variant='primary' type='submit'>Submit</Button>
            </Form>
          </Col>
          <Col lg={6}>
            <h3>Address</h3>
            <p>302,Saravanampatti,Coimbatore</p>
            <p>Phone:<a href='tel:+919786575916'> +91-9786575916</a></p>
            <p>Email: <a href='mailto:sundaravel.exe@gmail.com'>sundaravel.exe@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;