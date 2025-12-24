// Contact.js
import React, { useState, useEffect } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa";

export default function Contact() {
  // Typing effect state
  const fullText = "Contact Me";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 120); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-section">
      {/* Typing Effect Heading */}
      <h2 className="section-title">{displayedText}</h2>

      <div className="card contact-card fade-in">
        <p className="contact-text">
          If it lives in your mind, we can build it. Drop a brief or reach out to me.
        </p>

        {/* Location */}
        <div className="contact-location">
          <FiMapPin size={20} />
          <span>Lagos, Nigeria</span>
        </div>

        {/* Email Form */}
        <form
          className="contact-form"
          action="mailto:abdulhamidoshiomah@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your name" className="input-field" required />
          <input type="email" name="email" placeholder="Email" className="input-field" required />
          <textarea name="message" placeholder="Brief" rows={4} className="input-field" required />
          <button className="btn form-btn" type="submit">
            <FiMail size={20} />
          </button>
        </form>

        {/* Social Links */}
        <div className="contact-links fade-up">
          <a
            href="https://www.linkedin.com/in/abdulhamid-aneru-a0b5b2235"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn linkedin-btn"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://github.com/cruisernation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn github-btn"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://x.com/_shadowofweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn x-btn"
          >
            <FaXTwitter size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
