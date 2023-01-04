import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import Carousel from 'react-elastic-carousel';
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1, showArrows: false  },
        { width: 550, itemsToShow: 1, showArrows: false  },
        { width: 750, itemsToShow: 2, itemsToScroll: 1, },
        { width: 1150, itemsToShow: 2, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 2, itemsToScroll: 1, },
        { width: 1750, itemsToShow: 2, itemsToScroll: 1, },
    ]


    return (
        <section className="projects" id="projects">
            <TrackVisibility once="True" partialVisibility="True">
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__bounceInRight animate__fast" : "hide_it"}  >
            <Container className="projects-container">
                <Row>
                    <Col>
                        <Row className="projects-row">
                            <h2>PROJECTS</h2>
                        </Row>
                        <Row  className="projects-row">
                        <Carousel breakPoints={breakPoints}>
                            {[
                                {
                                    title: 'Footy plan', 
                                    description: 'Footy Plan is a web application to create and manage football tournaments.', 
                                    imageUrl: require("../assets/image/footy-plan.png"),
                                    link: 'https://github.com/faiyaz97/footy-plan'
                                },     
                                {
                                    title: 'Jobd', 
                                    description: 'An Android application where you can post and search for a job.', 
                                    imageUrl: require("../assets/image/jobd.png"),
                                    link: 'https://github.com/faiyaz97/Jobd'
                                },
                                {
                                    title: 'Fashion MNIST AI', 
                                    description: 'Using the Fashion MNIST dataset imported from the keras datasets and creating the best model for this type of dataset to recognize the clothing.', 
                                    imageUrl: require("../assets/image/fashion.png"),
                                    link: 'https://github.com/faiyaz97/fashion-MNIST-AI'
                                },     
                            ].map((project) => (
                                <Col className="p-md-4">
                                    <Card className="projects-card">
                                        <Card.Img variant="top" src={project.imageUrl} alt='project picture' className="card-image"/>
                                        <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        <Card.Link href={project.link} title="Source code on GitHub"  target="_blank" className="card-link"><FaGithub className="project-icon"/></Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            </Carousel>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>}
            </TrackVisibility>
            
        </section>
    )

}