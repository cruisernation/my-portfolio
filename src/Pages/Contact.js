import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="card contact-card fade-in">
        <p className="contact-text">
          If it lives in your mind, we can build it. Drop a brief or reach out to me.
        </p>

        {/* Location */}
        <div className="contact-location">
          <FiMapPin size={16} />
          <span>Lagos, Nigeria</span>
        </div>

        {/* Email Form */}
        <form
          className="contact-form"
          action="mailto:abdulhamidoshiomah@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input-field"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
          />

          <textarea
            name="message"
            placeholder="Brief"
            rows={4}
            className="input-field"
            required
          />

          <button className="btn form-btn" type="submit">
            <FiMail size={16} />
            Send Message
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
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/cruisernation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn-btn"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://x.com/_shadowofweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn icon-btn x-btn"
          >
            <FaXTwitter size={18} />
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
