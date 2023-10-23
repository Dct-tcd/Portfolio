import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import Screenshot from "../../Assets/Projects/Screenshot.png";
import Home from "../../Assets/Projects/Home.jpg";
import speed from "../../Assets/Projects/Speed.jpg";
import News from "../../Assets/Projects/News.jpg";
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
              title="Chat Forum"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing and real-time editing on the messages.It not only facilitates real-time messaging, image sharing, and collaborative message editing but also ensures a seamless and secure environment for users to connect and engage with their friends while sharing resources."
              ghLink="https://github.com/Dct-tcd/Chat-app-With-Firebase"
              demoLink="https://chat-app-by-dev.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Home}
              isBlog={false}
              title="Dsa Tracker"
              description="This application meticulously maintains personalized records of completed questions within the context of Data Structures and Algorithms (DSA) preparation. Instead of relying on an integrated database solution, it leverages local storage to securely and efficiently manage data storage. These questions are thoughtfully organized into distinct categories, enabling them to be readily accessed and used to generate responses on the application's home page."
              ghLink="https://github.com/Dct-tcd/Dsa-Tracker"
              demoLink="https://dsa-tracker-by-dct.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Screenshot}
              isBlog={false}
              title="Sorter"
              description="This sorting algorithm visualization tool serves as an effective means for illustrating the inner workings of various sorting algorithms. Developed using Pygame, this application provides visual representations and step-by-step cues for some of the most widely recognized sorting algorithms, including Bubble Sort, Quick Sort, and Merge Sort."
              ghLink="https://github.com/Dct-tcd/Sorting-algorithms-visualizers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="NewsMonkey"
              description="This React application is designed to seamlessly present the most current news content, enabling users to stay well-informed about global developments. It offers a user-friendly experience by categorizing news items efficiently, allowing individuals to access information more conveniently without the need for time-consuming manual sorting. This feature not only streamlines the news consumption process but also enhances the overall user experience, ensuring that valuable time is spent more productively."
              ghLink="https://github.com/Dct-tcd/NewsMonkey-"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speed}
              isBlog={false}
              title="Speed typing challenge"
              description="Our Speed Typing Challenge project is a web application built using HTML, CSS, and JavaScript. It tests and improves users' typing speed and accuracy in an engaging and competitive manner. HTML defines the structure of the webpage, CSS handles the design and layout, and JavaScript manages game logic, including the timer, scoring, and real-time feedback. Users can challenge themselves and track their progress, making it a fun and educational tool for improving typing skills."
              ghLink="https://github.com/Dct-tcd/Speed-typing-Challenge-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
