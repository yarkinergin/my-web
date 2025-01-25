import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Parser } from "html-to-react";

import { Buffer } from "buffer";
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

    const [skillItems, setSKi] = useState(null);

    let skillArr: any = []

    const htmlParser = Parser();


    let data = {
        email: `yarkinerg@gmail.com`
    };

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://yarkinergin.cyclic.cloud/api/info/about',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from('yarking:Bella1304').toString('base64')}`
        },
        data : data
    };

    useEffect(() => {
        console.log("s")

        /*axios.request(config)
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
            url: 'https://yarkinergin.cyclic.cloud/api/blog/skills',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from('yarking:Bella1304').toString('base64')}`
            },
            data: data
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
        */
    }, [name]);
    
    
    return (
        <div>
            <Navbar/>
            <Container id='home' fluid className='App w-100'>
                <Container className='headerCon'>
                    <h1 className="mainName">{name}Yarkin Ergin</h1>
                    <h4 className='text-light'>{htmlParser.parse(info)}Personal web page</h4>
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
                    <Col sm lg={3}>
                        <img src={miniPp} alt='Logo' className='aboutMePp' />
                    </Col>
                    <Col>
                        <Container className='aboutMeTxt'>
                            <h2 className='mb-4'>About Me</h2>
                            <p className='w-75'>{aboutme}
                                I have graduated from <a href='https://w3.bilkent.edu.tr/bilkent/'>Bilkent University</a>,
                                 and studying MSc in the department of Artificial Intelligence at <a href='https://www.brunel.ac.uk/'>Brunel University London</a></p>
                            <Row className='justify-content-center pt-2 w-75'>
                                <Col xs lg={5}>
                                    <p><strong><BsPinMapFill/> Location:</strong>{location} London</p>
                                    <p><strong><BsFlag/> Nationality:</strong>{nationality} Turk</p>
                                    <p><strong><BsMortarboard/> Study:</strong>{study} Computer Science / AI</p>
                                </Col>
                                <Col xs lg={5}>
                                    <p><strong><BsCalendarEvent/> Age:</strong> {age} 23</p>
                                    <p><strong><BsStars/> Interests:</strong> {interests} Chess, snowboard, skating</p>
                                    <p><strong><BsFillBuildingsFill/> Employment:</strong> {employment} Part-time</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container id='skills' className='skills'>
                {skillItems}
                <div>
                    <Row>
                        <Col md lg={3} className='skillCol mb-4'>
                            <h2 className='skillHeader'>Coding Languages</h2>
                        </Col>
                        <Col>
                            TypeScript, JavaScript, Java, C, C++, Phyton, CSS, HTML, Git
                        </Col>
                    </Row>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                </div>
            </Container>
            <Projects/>
            <Footer/>
        </div>
    );
    }
    
export default Home;
