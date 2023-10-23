import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dev Chaitanya tiwari </span>
            from <span className="purple"> Indore , India.</span>
            <br /> I am a final year student pursuing B.Tech
            in Information Technology from <strong className="purple"> Medicaps University , Indore</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading History books
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Playing Video games
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
