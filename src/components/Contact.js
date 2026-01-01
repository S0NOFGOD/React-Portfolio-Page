import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Want to work together?</p>
      <a href="mailto:destiny@email.com" className="btn">
        Send Email
      </a>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="#">Twitter</a>
      </div>
    </section>
  );
}

export default Contact;