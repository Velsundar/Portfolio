import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const PopUp = ({show, handleClose}) => {
  const [formData, setFormData]=useState({
    companyName:'',
    email:'',
    number:'',
    location:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form  action="https://getform.io/f/e76f1b0e-01a1-4b2c-b933-8c2a9195536f" method="post">
        <Form.Group controlId='formCompanyName'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control type='text' name='companyName' value={formData.companyName} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" name="number" value={formData.number} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="Submit">
            Submit
        </Button>
        </Form> 
      </Modal.Body>
    </Modal>
    </>
  )
}

export default PopUp;
