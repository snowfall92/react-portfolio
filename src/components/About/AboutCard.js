import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omar Flores </span>
            from <span className="purple"> San Diego, California.</span>
            <br />
            I am currently looking for employment, as a software developer.
            <br />
            I'm currently attending Unitec University, studying Computer Science and Information Systems with an emphasis in Web development
            and Cybersecurity.  My passion is to learn new technologies
            and develop innovative solutions that make the world a better place.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> SkateBoarding, SnowBoarding, Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make a difference in World, Whether you get beat down, Don't bleed on others"{" "}
          </p>
          <footer className="blockquote-footer">Omar Flores</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
