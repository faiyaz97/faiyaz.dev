import { Col, Container, Row } from "react-bootstrap";
import me from "../assets/image/me.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {

    return (
        <section className="about" id="about">
            <TrackVisibility once="True" partialVisibility="True">
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__bounceInLeft animate__fast" : "hide_it"}  >
            <Container className="about-container">
                <Row>
                    <Col xs={12} md={12} lg={3} xl={4} className="about-left">
                        <Row className="about-row"><h2>ABOUT ME </h2></Row>
                        <Row className="about-row-image"><img src={me} alt="Header Image" className="about-image"/></Row>
                    </Col>
                    <Col xs={12} md={12} lg={9} xl={8} className="about-right">
                        <p>
                            My name is Farhan Uddin Faiyaz and I am a full-stack developer based in London, UK. I recently graduated with a first class degree in Computer Science from Goldsmiths University of London.
                        </p>
                        <p>
                            I am proficient in several programming languages, including JavaScript, React, Python, Java, HTML and CSS. I am also familiar with a range of technologies, including Postman, Node.js, Express.js, Redux and MongoDB.
                        </p>
                        <p>
                            In my spare time, I enjoy staying up to date on the latest technologies and improve my knowledge in this area. I am particularly interested in programming languages and have a knack for quickly learning new ones. Through my work and education, I have developed a strong problem-solving mindset, which has been essential in my programming projects. For example, I have tackled challenging algorithms and data structures, and have learned to think critically and creatively in order to find solutions to complex problems.
                        </p>
                    </Col>
                </Row>
            </Container> 
            </div>}
            </TrackVisibility>
        </section>
    )

}