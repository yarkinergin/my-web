import React from "react";
import { Container } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { profile } from "./resumeData";

function Footer() {
  return (
    <Container id="contact" className="footer text-center mw-100">
      <Container className="my-2">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <BsEnvelope size={30} className="mx-2" color="white" />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <BsGithub size={30} className="mx-2" color="white" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin size={30} className="mx-2" color="white" />
        </a>
      </Container>
      <span className="text-secondary">© Copyright 2026 {profile.name}</span>
    </Container>
  );
}

export default Footer;
