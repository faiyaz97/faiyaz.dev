import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE, 
            process.env.REACT_APP_EMAILJS_TEMPLATE, 
        form.current,   
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            toast.success('Email sent!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }, (error) => {
            console.log(error.text);
            toast.error('Email not sent! We have some problem. Sorry!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
    };


    return (
        <section className="contact" id="contact">
            <TrackVisibility once="True" partialVisibility="True">
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__bounceInUp animate__slow" : "hide_it"}>
            <Container className="contact-container">
                <Row>
                    <h2>CONTACT ME</h2>
                    <Col xs={12} md={6} xl={6} className="contact-left">
                    <h1>Send a message!</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Name" required />
                        <input type="email" name="user_email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows="5" required />
                        <input type="submit" value="Send" />
                    </form>
                        <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                        />
                        
                    </Col>
                    <Col xs={12} md={6} xl={6} className="contact-right">
                    <h1>contact.css</h1>
                    <ul className='contact-info-list'>
                        <li className='contact-info-line'><span className="contact-info-span-info">.info  &#123;</span></li>
                        <li className='contact-info-line'><span className="contact-info-span-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location</span>: <span className="contact-info-span">London, UK</span>;</li>
                        <li className='contact-info-line'><span className="contact-info-span-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phone</span>: <span className="contact-info-span">+44 7388127980</span>;</li>
                        <li className='contact-info-line'><span className="contact-info-span-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email</span>: <span className="contact-info-span">faiyaz.f.uddin@gmail.com</span>;</li>
                        <li className='contact-info-line'><span className="contact-info-span-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub</span>: <a href='https://github.com/faiyaz97' target="_blank"><span className="contact-info-span">github.com/faiyaz97</span></a>;</li>
                        <li className='contact-info-line'><span className="contact-info-span-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linkedin</span>: <a href='https://linkedin.com/in/faiyaz-fu/' target="_blank"><span className="contact-info-span">linkedin.com/in/faiyaz-fu/</span></a>;</li>
                        <li className='contact-info-line'><span className="contact-info-span-info">&#125;</span></li>
                    </ul>
                    </Col>
                </Row>
            </Container>
            </div>}
            </TrackVisibility>
   
        </section>
    )

}