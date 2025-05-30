import React from "react";
import { Col, Container, Row } from 'react-bootstrap';

import dcLogo from "../../images/dc-logo.png";
import ncLogo from "../../images/nc.png";


function Projects () {
    return (
        <Container id="work" className="bg-projects mw-100 pb-3">
            <h2 style={{color: "white"}} className="text-center py-4">Check out my work!</h2>
            <Container>
                <Row>
                    <Col xs lg={4} className="work-img-col py-4">
                        <div className="bg-image ripple rounded" data-mdb-ripple-color="light">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=859181482161078314&permissions=8&scope=bot">
                        <img src={dcLogo} alt="dcLogo" className="w-50" />
                            <div className="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.4)"}}>
                            </div>
                            <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "hsla(0, 0%,98%, 0.2)"}}>
                                    <div className="d-flex justify-content-center align-items-end pb-3 h-100">
                                        <p className="text-white mb-0">Discord Bot</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                    </Col>
                    <Col xs lg={4} className="work-img-col py-4">
                        <div className="bg-image ripple rounded" data-mdb-ripple-color="light">
                        <a href="https://next.yarkinergin.com">
                        <img src={ncLogo} alt="dcLogo" className="w-50" />
                            <div className="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.4)"}}>
                            </div>
                            <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "hsla(0, 0%,98%, 0.2)"}}>
                                    <div className="d-flex justify-content-center align-items-end pb-3 h-100">
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;