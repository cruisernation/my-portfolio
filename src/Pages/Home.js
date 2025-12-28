import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const roles = ["I code.", "I build.", "I ship."];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect (FIXED)
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 60);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 900);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="home">
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Web Developer <br />
            <span className="typing">{text}</span>
          </h1>

          <p className="hero-sub">
            I build performant, scalable web applications with clean UI,
            strong UX, and production-ready architecture.
          </p>

          <div className="hero-cta">
            <Link to="/portfolio" className="btn primary">View Work</Link>
            <Link to="/contact" className="btn ghost">Hire Me</Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/main-pfp.jpeg"
            alt="Aneru Abdulhamid Oshiomah"
            className="hero-img"
          />
        </div>
      </div>

      {/* PERFORMANCE */}
      <section className="performance">
        <h2>Performance First</h2>
        <p>
          I prioritize speed, accessibility, clean code, and scalable
          architecture. Every project is optimized for real-world usage,
          not just visuals.
        </p>
      </section>

      {/* TOOLS */}
      <section className="tools">
        <h2>Tools & Stack</h2>
        <div className="tools-grid">
          {["React", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Vercel", "ML"].map(
            (tool) => (
              <div key={tool} className="tool-pill">{tool}</div>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        {[
          {
            q: "What do you specialize in?",
            a: "Web development with a focus on performance, clean UI, and scalable frontend architecture."
          },
          {
            q: "Do you work remotely?",
            a: "Yes. I work remotely with clients globally and communicate clearly throughout the project."
          },
          {
            q: "What tools do you use?",
            a: "React, JavaScript, Git, GitHub, Vercel, HTML, CSS, and modern tooling."
          },
          {
            q: "Do you optimize for performance?",
            a: "Absolutely. Performance is not optional — it’s built into every project from day one."
          }
        ].map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openFAQ === i ? "open" : ""}`}
          >
            <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
              {item.q}
            </button>
            <div className="faq-answer">{item.a}</div>
          </div>
        ))}
      </section>
    </section>
  );
}
