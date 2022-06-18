import { useState } from "react";
import "./contact.scss";
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


export default function Contact() {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_itqcydj', 'template_pop8jtk', form.current, 'gDAs8J4IXdbXbITv_')
    e.target.reset()
  };
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <h3>Get In Touch.</h3>
        <h2>Contact Me.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}