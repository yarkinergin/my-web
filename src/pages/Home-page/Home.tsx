import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsEnvelope, BsDownload, BsPinMapFill } from "react-icons/bs";

import Projects from "./Projects";
import Footer from "./Footer";
import Navbar from "./Navbar";
import miniPp from "../../images/mini-pp.jpg";
import {
  certifications,
  education,
  experience,
  honors,
  profile,
  projects,
  skillChips,
} from "./resumeData";

function Home() {
  return (
    <div>
      <Navbar />
      <Container id="home" fluid className="App w-100">
        <Container className="headerCon">
          <h1 className="mainName">{profile.name}</h1>
          <h4 className="text-light mb-1">
            {profile.title} · {profile.location}
          </h4>
          <p className="text-light mb-3 hero-sub">{profile.headline}</p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href={profile.cvHref} download>
              <BsDownload aria-hidden /> Download CV
            </a>
            <a className="hero-btn" href={`mailto:${profile.email}`}>
              <BsEnvelope aria-hidden /> Email
            </a>
            <a
              className="hero-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin aria-hidden /> LinkedIn
            </a>
          </div>
          <a
            href={profile.github}
            className="hero-github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <BsGithub size={22} />
          </a>
        </Container>
      </Container>

      <Container fluid id="aboutme" className="aboutMe">
        <Row className="justify-content-md-center">
          <Col sm lg={3}>
            <img src={miniPp} alt={`${profile.name} portrait`} className="aboutMePp" />
          </Col>
          <Col>
            <Container className="aboutMeTxt">
              <h2 className="mb-3">About</h2>
              <p className="about-copy">{profile.about}</p>
              <p className="mb-0">
                <strong>
                  <BsPinMapFill aria-hidden /> Location:
                </strong>{" "}
                {profile.location}
              </p>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container id="skills" className="skills">
        <Row className="mb-4">
          <Col md lg={3} className="skillCol mb-3">
            <h2 className="skillHeader">Skills</h2>
          </Col>
          <Col className="d-flex flex-wrap align-items-center gap-2 py-1">
            {skillChips.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </Col>
        </Row>

        <hr className="section-rule" />

        <Row id="experience">
          <Col md lg={3} className="skillCol mb-4">
            <h2 className="skillHeader">Experience</h2>
          </Col>
          <Col>
            {experience.map((job) => (
              <article key={`${job.company}-${job.dates}`} className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-title">{job.title}</h3>
                    <p className="exp-company mb-0">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="exp-dates mb-0">{job.dates}</p>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="skill-chip skill-chip-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Col>
        </Row>

        <hr className="section-rule" />

        <Row>
          <Col md lg={3} className="skillCol mb-4">
            <h2 className="skillHeader">Education</h2>
          </Col>
          <Col>
            {education.map((item) => (
              <article key={item.title} className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-title">{item.title}</h3>
                    <p className="exp-company mb-0">
                      {item.place}
                      {item.note ? ` · ${item.note}` : ""}
                    </p>
                  </div>
                  <p className="exp-dates mb-0">{item.dates}</p>
                </div>
              </article>
            ))}
          </Col>
        </Row>

        <hr className="section-rule" />

        <Row>
          <Col md lg={3} className="skillCol mb-4">
            <h2 className="skillHeader">Projects</h2>
          </Col>
          <Col>
            {projects.map((item) => (
              <article key={item.title} className="exp-card">
                <h3 className="exp-title">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mb-2">{item.summary}</p>
                <div className="d-flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="skill-chip skill-chip-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Col>
        </Row>

        <hr className="section-rule" />

        <Row>
          <Col md lg={3} className="skillCol mb-4">
            <h2 className="skillHeader lh-base">Certifications</h2>
          </Col>
          <Col>
            {certifications.map((item) => (
              <article key={item.label} className="exp-card">
                <h3 className="exp-title">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </h3>
                <p className="exp-company mb-0">{item.detail}</p>
              </article>
            ))}
            <ul className="honors-list">
              {honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
