import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Parser } from "html-to-react";

import Projects from './Projects';
import Footer from './Footer';
import Navbar from './Navbar';

import {BsPinMapFill, BsFlag, BsMortarboard, BsCalendarEvent, BsStars, BsFillBuildingsFill} from "react-icons/bs"
import {BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

import miniPp from '../../images/mini-pp.jpg';
  
function Home() {
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [aboutme, setAboutme] = useState("");
    const [location, setLoc] = useState("");
    const [nationality, setNat] = useState("");
    const [study, setStu] = useState("");
    const [age, setAge] = useState("");
    const [interests, setInt] = useState("");
    const [employment, setEmp] = useState("");

    const [skillItems, setSKi] = useState("");

    const htmlParser = Parser();

    let data = {
        email: `yarkinerg@gmail.com`
    };

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://real-gold-kangaroo-cap.cyclic.cloud/api/info/about',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    axios.request(config)
    .then((response) => {
        setName(response.data.name)
        setInfo(response.data.info)
        setAboutme(response.data.aboutme)
        setLoc(response.data.location)
        setNat(response.data.nationality)
        setStu(response.data.study)
        setAge(response.data.age)
        setInt(response.data.interests)
        setEmp(response.data.employment)
    })
    .catch((error) => {
        console.log(error);
    });

    axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://real-gold-kangaroo-cap.cyclic.cloud/api/blog/skills',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            "email": "yarkinerg@gmail.com"
        })
    })
    .then((response) => {
         setSKi((response.data.skill).map((ski: any) => 
            <div key={ski._id}>
            <Row>
                <Col md lg={3} className='skillCol mb-4'>
                    <h2 className='skillHeader'>{ski.header}</h2>
                </Col>
                <Col>
                    {htmlParser.parse(ski.text)}
                </Col>
            </Row>
            <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
            </div>
        ));
    })
    .catch((error) => {
        console.log(error);
    });
    
    return (
        <div>
            <Navbar/>
            <Container id='home' fluid className='App w-100'>
                <Container className='headerCon'>
                    <h1 className="mainName">{name}</h1>
                    <p className='text-light'>{htmlParser.parse(info)}</p>
                    <Container className="my-2 pb-2">
                        <a href="https://github.com/yarkinergin">
                            <BsGithub size={20} className="mx-2" color="white"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yark%C4%B1n-ergin-aa2b6b1a8/">
                            <BsLinkedin size={20} className="mx-2" color="white"/>
                        </a>
                        <a href="https://www.instagram.com/yarkinergin/">
                            <BsInstagram size={20} className="mx-2" color="white"/>
                        </a>
                        <a href="https://www.facebook.com/ergin.yarkin/">
                            <BsFacebook size={20} className="mx-2" color="white"/>
                        </a>
                        <a href="https://twitter.com/yarknergin">
                            <BsTwitter size={20} className="mx-2" color="white"/>
                        </a>
                    </Container>
                </Container>
            </Container>
            <Container fluid id='aboutme' className='aboutMe'>
                <Row className='justify-content-md-center'>
                    <Col xs lg={3}>
                        <img src={miniPp} alt='Logo' className='aboutMePp' />
                    </Col>
                    <Col>
                        <Container className='aboutMeTxt'>
                            <h2 className='mb-4'>About Me</h2>
                            <p className='w-75'>{aboutme}</p>
                            <Row className='justify-content-center pt-2 w-75'>
                                <Col xs lg={5}>
                                    <p><strong><BsPinMapFill/> Location:</strong> {location}</p>
                                    <p><strong><BsFlag/> Nationality:</strong> {nationality}</p>
                                    <p><strong><BsMortarboard/> Study:</strong> {study}</p>
                                </Col>
                                <Col xs lg={5}>
                                    <p><strong><BsCalendarEvent/> Age:</strong> {age}</p>
                                    <p><strong><BsStars/> Interests:</strong> {interests}</p>
                                    <p><strong><BsFillBuildingsFill/> Employment:</strong> {employment}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container id='skills' className='skills'>
                {skillItems}
            </Container>
            <Projects/>
            <Footer/>
        </div>
    );
    }
    
export default Home;