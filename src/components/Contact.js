import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState('');

  useEffect(() => {
    if(status === 'SUCCESS'){
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);


  const sendEmail = (data, e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('gmail', 'template_oipclw9', e.target, 'TrHiDQtnsYLeyACe1')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS')
      }, (error) => {
          console.log(error.text);
      });
      setButtonText("Send");
      reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                {status && renderAlert()}
                <form onSubmit={handleSubmit(sendEmail)}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name='firstName'
                      {...register("firstName", { required: true, maxLength: 15 })}
                      />
                      {errors.firstName && <p style={{ color: 'red' }}>First Name should not be empty</p>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name='lastName'
                      {...register("lastName", { required: true, maxLength: 15 })}
                      />
                      {errors.lastName && <p style={{ color: 'red' }}>Last Name should not be empty</p>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name='email'
                      {...register("email",
                      { 
                        required: true,  
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                    }
                      )}
                      />
                      {errors.email && <p style={{ color: 'red' }}>Email should not be empty</p>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name='phone'
                      {...register("phone")}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name='message' {...register("message",
                      { 
                        required: true})}></textarea>
                        {errors.message && <p style={{ color: 'red' }}>Message should not be empty</p>}
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const renderAlert = () => (
  <div className="leading-normal bg-blue-100 rounded mb-5 text-center">
    <p style={{ color: 'yellow' }}>your message submitted successfully</p>
  </div>
)