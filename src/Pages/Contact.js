import React from 'react';
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="card contact-card fade-in">
        
        <p className="contact-text">
          If it lives in your mind, we can build it. Drop a brief or reach out to me ;
        </p>

        <form 
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! Message sent (simulated).');
          }}
        >
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Brief" rows={4} className="input-field" />

          <button className="btn form-btn" type="submit">
            Send message
          </button>
        </form>

        <div className="contact-links fade-up">
          <a href="mailto:abdulhamidoshiomah@gmail.com" className="btn icon-btn">
            <FiMail size={18} />
            Email Me
          </a>

          <a 
            href="https://x.com/_shadowofweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn x-btn icon-btn"
          >
            <FaXTwitter size={18} />
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
