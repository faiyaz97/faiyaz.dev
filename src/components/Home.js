import { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import avatar from "../assets/image/cat-nerd.png";
import "animate.css";

export const Home = () => {

    return(
        <section className="home" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="animate__animated animate__zoomInDown animate__faster">Hi, I'm Faiyaz!</h1>
                        <h3 className="animate__animated animate__zoomInDown animate__fast">A Junior Full Stack Developer</h3>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={avatar} alt="Header Image" height= {400}/>
                    </Col>
                </Row>
            </Container>

        </section>


    )
}