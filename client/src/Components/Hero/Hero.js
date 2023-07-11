import React, { useState } from 'react';
import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import velImage from '../../Assets/Portfolio_VEL.png';
import velSvg from '../../Assets/yellow_svg.svg'
import '../../Styles/Hero.css'
import Resume from '../../Assets/SUNDARAVEL_K.pdf'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import PopUp from '../PopUp';

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleShowPopup = () => {
        setShowPopup(true);
      };
      const handleClosePopup = () => {
        setShowPopup(false);
      };
    
    const handleDownloadCV = () =>{
        const link = document.createElement('a');
        link.href = Resume;
        link.target = '_blank';
        link.download = 'SUNDARAVEL_K.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    };


  return (
    <div className='hero-container container-fluid'>
        <Container id='home' >
            <Row>
                <Col md={6} className='d-flex flex-column justify-content-centre'>
                    <h1 className='hero-title' style={{fontFamily:"Stylish"}}>I am a Full Stack Web Developer</h1>
                    <p className='hero-paragraph' style={{fontFamily:"Stylish"}}>
                        This is my official portfolio Website to showcase all my works related web development.
                    </p>
                    <Button  variant="light" className='btn' onClick={handleShowPopup}>Hire Me</Button>
                </Col>
                <PopUp show={showPopup} handleClose={handleClosePopup} />
                <Col md={6} className='d-flex justify-content-end align-items-center'>
                <div  className="hero-image">
                    <Image src={velImage} alt="Profile" className="profile-image rounded" />
                </div>
                <div className="hero-background d-none d-lg-block">
                    <Image src={velSvg} alt="Background" className="background-image svgimage" />
                </div>
                </Col>
            </Row>
        </Container>
        {/* Side Floating icons */}
        <nav className="floating-icons">
            <ul>
                <li><a href="#Linkedin"><FaLinkedin /><span>Linkedin</span></a></li>
                <li><a href="https://github.com/Velsundar"target='_blank'  rel="noreferrer"><FaGithub /><span>Github</span></a></li>
                <li><a href="#mail"><RiMailSendFill /><span>Mail Me</span></a></li>
                <li><a href="#cv" onClick={handleDownloadCV}><BsFillPersonLinesFill /><span>Resume</span></a></li>
                </ul>
        </nav>
        {/* About Me */}
        <Container id='about'>
            <Row>
            <div className='row position-relative' style={{marginTop:'100px'}}>
            <Col md={8} className='flex-column justify-content-centre'>
                <h1 className='about-title mt-0 ms-4' style={{fontFamily:"Stylish"}}><u>ABOUT</u></h1>
                <p className='about-paragraph col-12 mt-0 ms-5 sm-mt-0' style={{fontFamily:"Stylish",fontSize:'25px'}}>
                    Hi, I am Sundaravel.As a skilled full-stack web developer, proficient in React and Node, you possess a comprehensive understanding of both front-end and back-end technologies. Your expertise allows you to create dynamic and user-friendly web applications with seamless functionality. With a proven track record of delivering high-quality projects, you excel in problem-solving and collaborating within a team to achieve exceptional results. Your passion for cutting-edge technologies and continuous learning ensures you stay up-to-date with the latest industry trends.
                </p>
            </Col>
            </div>
            </Row>
        </Container>
        {/* Projects sections */}
        {/* <Container style={{marginTop:"100px"}}>
            <Row>
                <Col>
                <h1><u>Projects</u></h1>
                <p>Please Review a selection of my project works showcased here</p>
                </Col>
            </Row>
        </Container> */}
    </div>
  );
};

export default Hero;
