import React from "react";
import { Container } from "react-bootstrap";

import {BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
    return(
        <Container className="footer text-center mw-100">
            <Container className="my-2">
                <a href="https://github.com/yarkinergin">
                    <BsGithub size={30} className="mx-2" color="white"/>
                </a>
                <a href="https://www.linkedin.com/in/yark%C4%B1n-ergin-aa2b6b1a8/">
                    <BsLinkedin size={30} className="mx-2" color="white"/>
                </a>
                <a href="https://www.instagram.com/yarkinergin/">
                    <BsInstagram size={30} className="mx-2" color="white"/>
                </a>
                <a href="https://www.facebook.com/ergin.yarkin/">
                    <BsFacebook size={30} className="mx-2" color="white"/>
                </a>
                <a href="https://twitter.com/yarknergin">
                    <BsTwitter size={30} className="mx-2" color="white"/>
                </a>
            </Container>
            <br/>
            <span className="text-secondary">© Copyright 2025 Yarkin Ergin</span>
        </Container>
    );
}

export default Footer;