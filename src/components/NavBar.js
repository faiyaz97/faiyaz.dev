import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SVG from "../assets/image/FFU-02.svg";


export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={SVG} width="30" height="30" viewBox="0 0 30 30"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                    <Nav.Link href="#about" className="navbar-link">About</Nav.Link>
                    <Nav.Link href="#projects" className="navbar-link">Projects</Nav.Link>
                    <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/faiyaz-fu/" target='_blank'><FaLinkedin className="icons"/></a>
                        <a href="https://github.com/faiyaz97" target='_blank'><FaGithub className="icons"/></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}