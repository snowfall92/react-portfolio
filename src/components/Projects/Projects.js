import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FILMPIRE"
              description="I take pride in my ability to transform your vision into a functional and captivating website's like Filmpire that truly represents great UI experience. Whether you need a personal portfolio, an e-commerce platform, or a corporate website, I am dedicated to providing you with a tailored solution that meets your specific requirements."
              ghLink="https://github.com/snowfall92/Filmpire"
              demoLink="https://filmpire1992.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hoo-Bank"
              description="This innovative React project revolutionizes the way you make payments, prioritizing ease, reliability, and security. It offers a fresh approach that eliminates friction points and fosters trust, ultimately enhancing the payment experience for both users and businesses."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://hoobank1992.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flo's BarberShop"
              description="I'm proud to present my HTML & CSS barbershop website, designed to showcase your services and captivate potential clients. This website offers a clean, modern aesthetic that reflects the professionalism and attention to detail of your barbershop."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://floresbarbershop.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fresh N Go"
              description="Welcome to the digital home of Fresh N' Go, San Diego's beloved restaurant serving up delicious, organic, and healthy food on the go! This website, built with the power of HTML, CSS, and PHP, reflects the vibrant spirit and commitment to quality that has made Fresh N' Go a local favorite."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://freshngo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Meson De Santiago"
              description="Dive into the vibrant world of Meson de Santiago, a beloved restaurant tantalizing San Diego taste buds with authentic Mexican cuisine and mouthwatering birria. This website, crafted with the versatility of WordPress, HTML, and CSS, captures the essence of their culinary passion and welcomes you on a delicious journey."
              ghLink="https://github.com/snowfall92"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="This project explored the capabilities of deep learning for recognizing human emotions in real-time. Leveraging the extensive FER-2013 dataset, I trained a Convolutional Neural Network (CNN) classifier using Keras and TensorFlow as the backend."
              ghLink="https://github.com/snowfall92/Facial_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
