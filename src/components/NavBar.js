import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFoursquare } from "react-icons/fa";


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
                <svg width="30" height="30" viewBox="0 0 30 30">
                    <path fill="rgb(250,174,28)" d="M 11.535156 25.976562 L 7.980469 25.976562 C 7.703125 25.976562 7.476562 25.75 7.476562 25.46875 L 7.476562 3.988281 C 7.476562 3.707031 7.703125 3.476562 7.980469 3.476562 L 22.191406 3.476562 C 22.472656 3.476562 22.699219 3.707031 22.699219 3.988281 L 22.699219 7.058594 C 22.699219 7.339844 22.472656 7.570312 22.191406 7.570312 L 12.042969 7.570312 L 12.042969 13.195312 L 20.671875 13.195312 C 20.949219 13.195312 21.179688 13.421875 21.179688 13.707031 L 21.179688 16.261719 C 21.179688 16.542969 20.949219 16.773438 20.671875 16.773438 L 12.042969 16.773438 L 12.042969 25.46875 C 12.042969 25.75 11.816406 25.976562 11.535156 25.976562 Z M 11.535156 25.976562 " />
                </svg>
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