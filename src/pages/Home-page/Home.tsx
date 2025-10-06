import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Parser } from "html-to-react";

import { Buffer } from "buffer";
import Projects from './Projects';
import Footer from './Footer';
import Navbar from './Navbar';

import {BsPinMapFill, BsFlag, BsMortarboard, BsCalendarEvent, BsStars, BsFillBuildingsFill} from "react-icons/bs"
import {BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

import miniPp from '../../images/mini-pp.jpg';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { List, ListGroupItemText, ListInlineItem } from 'reactstrap';


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
                    <h4 className='text-light'>{htmlParser.parse(info)} Software / AI developer</h4>
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
                                I am an MSc Artificial Intelligence graduate from <a href='https://www.brunel.ac.uk/'>Brunel University London</a> 
                             (Distinction) with hands-on experience in software engineering, machine learning, and full-stack development. 
                            My recent work includes building a real-time VR rehabilitation platform in Unity integrated with deep learning models, and developing scalable applications using 
                                Python, React, Node.js, and AWS. I’m passionate about creating intelligent, human-centred software that solves real-world 
                                problems — combining technical precision with creativity. Driven, curious, and detail-oriented, I thrive in collaborative 
                                environments where I can design, build, and optimise systems that deliver meaningful impact.</p>
                            <Row className='justify-content-center pt-2 w-75'>
                                <Col xs lg={5}>
                                    <p><strong><BsPinMapFill/> Location:</strong>{location} London</p>
                                    <p><strong><BsFlag/> Nationality:</strong>{nationality} Turk</p>
                                    <p><strong><BsMortarboard/> Study:</strong>{study} Computer Science / AI</p>
                                </Col>
                                <Col xs lg={5}>
                                    <p><strong><BsCalendarEvent/> Age:</strong> {age} 23</p>
                                    <p><strong><BsStars/> Interests:</strong> {interests} Chess, snowboard, skating</p>
                                    <p><strong><BsFillBuildingsFill/> Employment:</strong> {employment} Full time</p>
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
                            <h2 className='skillHeader'>Summary</h2>
                        </Col>
                        <Col>
                            <MDBListGroup>
                                <ListGroupItemText>
                                    Software Engineer with hands-on experience in full-stack web development, AI engineering, and cloud infrastructure.
                                </ListGroupItemText>
                                <ListGroupItemText>
                                    Proficient in modern technologies, including React, Node.js, TypeScript, Python, and AWS.
                                </ListGroupItemText>
                                <ListGroupItemText>
                                    Developed an AI-powered VR rehabilitation system using Unity for MSc dissertation, implementing six time-series models:
                                    Random Forest, SVM, Gradient Boosting, RNNs (LSTM), 1D-CNN, and Transformers.
                                </ListGroupItemText>
                                <ListGroupItemText>
                                    Strong collaborator with experience in Agile teams and cross-functional environments.
                                </ListGroupItemText>
                                <ListGroupItemText>
                                    Graduated with an MSc in Artificial Intelligence from Brunel University London, awarded a Distinction.
                                </ListGroupItemText>
                                <ListGroupItemText>
                                    Earned AWS Certified AI Practitioner, AWS Certified Machine Learning Engineer – Associate, and AWS Certified
                                    Machine Learning – Specialty, demonstrating validated cloud-based ML expertise.
                                </ListGroupItemText>
                            </MDBListGroup>
                        </Col>
                    </Row>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                    <Row>
                        <Col md lg={3} className='skillCol mb-4'>
                            <h2 className='skillHeader'>Education</h2>
                        </Col>
                        <Col>
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <strong>Artificial Intelligence Sep 2024 - Sep 2025</strong>
                                <br/>
                                MSc | Brunel University London
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <strong>Computer Science Sep 2019 - Jun 2024</strong>
                                <br/>
                                Bachelor | Bilkent University
                            </MDBListGroupItem>
                        </MDBListGroup>
                        </Col>
                    </Row>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                    <Row>
                        <Col md lg={3} className='skillCol mb-4'>
                            <h2 className='skillHeader'>Work Experience</h2>
                        </Col>
                        <Col>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <strong>AlgoritiX - Maryland, USA (Remote) 2023 - 2024 </strong>
                                    <br/>
                                    Full Stack Developer (Part-time)
                                    <br/>
                                    <br/>
                                    Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL (www.codeapeel.org)
                                    <br/>
                                    Built responsive user interfaces, integrated RESTful APIs, and deployed applications to AWS
                                    <br/>
                                    Collaborated with cross-functional teams in Agile environments to deliver secure, scalable solutions
                                    <br/>
                                    Implemented secure authentication and optimised performance for speed and efficiency
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <strong>Bilkent University 2023 - 2024</strong>
                                    <br/>
                                    Tutorship (Part-time)
                                    <br/>
                                    <br/>
                                    Provided academic support and one-on-one guidance to undergraduate students in an introductory Python course
                                    <br/>
                                    Assisted students in understanding core programming concepts, including variables, control structures, functions, and
                                    basic data structures
                                    <br/>
                                    Helped students debug code, prepare for exams, and complete programming assignments
                                    <br/>
                                    Collaborated with course instructors to deliver hands-on lab sessions and foster student engagement
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <strong>Turkish Ministry of Internal Affairs Jun 2023 - Aug 2023</strong>
                                    <br/>
                                    Internship
                                    <br/>
                                    <br/>
                                    Assisted in designing and developing responsive websites using HTML, CSS, JavaScript, and modern frameworks.
                                    <br/>
                                    Implemented secure data transmission features using encryption protocols and techniques.
                                    <br/>
                                    Contributed to back-end development, focusing on integrating security best practices to protect user data.
                                    <br/>
                                    Collaborated with senior developers to troubleshoot issues, enhance site performance, and ensure compliance with
                                    security standards.
                                    <br/>
                                    Gained hands-on experience with version control systems (e.g., Git) and agile development workflows
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <strong>Karel Electronics Inc. Jun 2022 - Aug 2022</strong>
                                    <br/>
                                    Internship
                                    <br/>
                                    <br/>
                                    Gained hands-on experience in machine learning and big data technologies, focusing on real-world applications in health
                                    tech
                                    <br/>
                                    Developed a Python-based fall detection system aimed at remote monitoring and maintenance for elderly care
                                    <br/>
                                    Designed and trained machine learning models with a success rate exceeding 90% in accurately detecting fall events
                                    <br/>
                                    Leveraged large datasets to improve model accuracy, scalability, and reliability
                                    <br/>
                                    Contributed to system integration and testing, ensuring practical deployment readiness in real-life scenarios
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </Col>
                    </Row>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                    <Row>
                        <Col md lg={3} className='skillCol mb-4'>
                            <h2 className='skillHeader'>Personal Projects</h2>
                        </Col>
                        <Col>
                        <MDBListGroup>
                            <MDBListGroupItem>
                                <strong>MSc Dissertation – AI-Powered VR Rehabilitation Application (Unity + Machine Learning)</strong>
                                <br/>
                                <br/>
                                Developed a virtual reality rehabilitation application in Unity focused on time-series-based movement analysis for
                                therapeutic use.
                                <br/>
                                Integrated six different machine learning models to classify and evaluate user motion patterns:
                                Random Forest, Support Vector Machine (SVM), Gradient Boosting (XGBoost)
                                Recurrent Neural Networks (RNN), including LSTM
                                1D Convolutional Neural Networks (1D-CNN)
                                Transformer models for time-series analysis
                                <br/>
                                Processed and labelled sensor data to train models for real-time feedback and rehabilitation progress tracking.
                                <br/>
                                Compared model accuracy, latency, and robustness to determine optimal deployment strategy in Unity.
                                <br/>
                                Demonstrated practical integration of AI models in an immersive VR environment, combining healthcare innovation with
                                interactive technologies.
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <strong>Bachelor’s Final Project – Intelligent Food Recommendation App (Github Link)</strong>
                                <br/>
                                Bilkent University | Sep 2019 – June 2024
                                <br/>
                                <br/>
                                Developed the front-end of a web application that suggests foods based on users’ previous comments and preferences
                                <br/>
                                Built dynamic and responsive interfaces using React, Bootstrap, and TypeScript
                                <br/>
                                Focused on enhancing user experience through clean design and intuitive interaction flows
                                <br/>
                                Strengthened skills in component-based architecture, state management, and front-end best practices
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <strong>AI Course Project – Monte Carlo-Based Chess Agent (Github Link)</strong>
                                <br/>
                                <br/>
                                Applied core AI concepts to simulate decision-making in a complex, adversarial environment.
                                <br/>
                                Implemented Monte Carlo simulations to evaluate and select optimal moves based on statistical outcomes.
                                <br/>
                                Developed full chess logic, including board representation, move validation, and game state evaluation.
                                <br/>
                                Analysed performance through self-play and benchmark testing against heuristic-based strategies.
                                <br/>
                                Written in Python, emphasising clarity, algorithmic thinking, and AI-oriented design.
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <strong>Personal Project – Nextcloud Admin Server</strong>
                                <br/>
                                <br/>
                                Deployed and configured a self-hosted Nextcloud server using Amazon EC2 to manage personal cloud storage and
                                administrative tools
                                <br/>
                                Handled server setup, security configurations, and routine maintenance for reliable uptime and performance
                                <br/>
                                Gained experience in cloud infrastructure, Linux server management, and secure data hosting practices
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                <strong>Personal Project – Full-Stack Portfolio Website</strong>
                                <br/>
                                <br/>
                                React, TypeScript, Mongoose, Firebase (www.yarkinergin.com)
                                <br/>
                                Designed and developed a full-stack personal portfolio website to showcase projects, skills, and experience.
                                <br/>
                                Built a dynamic front-end using React and TypeScript with a clean, responsive design for accessibility across devices.
                                <br/>
                                Implemented a Mongoose-based backend for structured data management and seamless integration.
                                <br/>
                                Deployed the site on Firebase, leveraging its hosting and authentication services for scalability and reliability.
                                <br/>
                                Gained hands-on experience in full-stack application design, cloud deployment, and modern web development best
                                practices.
                            </MDBListGroupItem>
                        </MDBListGroup>
                        </Col>
                    </Row>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                    <Row>
                        <Col md lg={3} className='skillCol mb-4'>
                            <h2 className='skillHeader lh-base'>Certifications and Honors</h2>
                        </Col>
                        <Col>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <strong><a href='https://www.credly.com/badges/67591fb5-8a0f-4e88-b0b6-7e2702c9e9fb/public_url'>AWS Certified AI Practitioner — Amazon Web Services (AWS)</a></strong>
                                    <br/>
                                    Credential ID: fd5a78cf5efd4a368f80ef32b66f340f – Issued: June 2025 · Expires: June 2028
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <strong><a href='https://www.credly.com/badges/1e0936fc-2e18-4c97-80bb-18cd539ce6a8/public_url'>AWS Certified Machine Learning Engineer – Associate — Amazon Web Services (AWS)</a></strong>
                                    <br/>
                                    Credential ID: a3aa0f0a00dc4bb28fd863035f3b8ab3 – Issued: July 2025 · Expires: July 2028
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <strong><a href='https://www.credly.com/badges/9ea8048d-fd0d-4377-ab81-54f0a1446356/public_url'>AWS Certified Machine Learning – Specialty — Amazon Web Services (AWS)</a></strong>
                                    <br/>
                                    Credential ID: 16ece76638e94111aa4a034a8c0b1f14 – Issued: August 2025 · Expires: August 2028
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    The best project chosen in the CS 319 Object-Oriented Software Engineering course (team). 2023.
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Turkish National University Selection Exam (YKS), Ranked 14700/2.5m (0,0058%), 2019.
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Projects/>
            <Footer/>
        </div>
    );
    }
    
export default Home;
