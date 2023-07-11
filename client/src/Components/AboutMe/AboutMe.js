import React from 'react'
import {Col} from 'react-bootstrap';


const AboutMe = () => {
  return (
    
    <div className='row position-relative'>
        <Col md={6} className='d-flex flex-column justify-content-centre ' style={{backgroundColor:'black',width:'100vw',height:'400px'}}>
            <h1 className='about-title position-absolute' style={{fontFamily:"Stylish",color:'white',left:'100px',top:'50px'}}><u>ABOUT</u></h1>
            <p className='about-paragraph  col-md-7 position-absolute' style={{fontFamily:"Stylish",color:'white',top:'90px',left:'150px'}}>
                    Hi, I am Sundaravel.As a skilled full-stack web developer, proficient in React and Node, I possess a comprehensive understanding of both front-end and back-end technologies. My expertise allows me to create dynamic and user-friendly web applications with seamless functionality. With a proven track record of delivering high-quality projects, I excel in problem-solving and collaborating within a team to achieve exceptional results. My passion for cutting-edge technologies and continuous learning ensures me stay up-to-date with the latest industry trends.
            </p>
        </Col>
    </div>
  )
}

export default AboutMe;
