import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const words = ["I code.", "I build.", "I ship."];

export default function Home() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typing Effect */
  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="home-section">
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="h1">
            Web Developer focused on <span className="accent">clarity</span>,{" "}
            <span className="accent">performance</span> &{" "}
            <span className="accent">results</span>
          </h1>

          <h2 className="typing">{text}<span className="cursor">|</span></h2>

          <p className="lead">
            I design and build modern web applications with clean architecture,
            scalable components, and performance in mind. From Web3 products to
            everyday web solutions, I turn ideas into reliable systems.
          </p>

          <div className="hero-cta">
            <Link to="/portfolio" className="btn">
              View Work
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Hire Me
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/main-pfp.jpeg"
            alt="profile"
            className="hero-img"
          />
        </div>
      </div>

      {/* TECH STACK */}
      <section className="stack-section">
        <h2 className="section-title">Tools & Stack</h2>
        <p className="section-sub">
          Technologies I use to build fast, maintainable, production-ready systems.
        </p>

        <div className="stack-grid">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitHub",
            "Vercel",
            "Machine Learning (Basics)",
          ].map((tool, i) => (
            <div key={i} className="stack-item">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="performance-section">
        <h2 className="section-title">Performance-Driven Development</h2>
        <p className="section-sub">
          Every project is built with speed, accessibility, and scalability in mind.
        </p>

        <div className="performance-grid">
          <div className="perf-card">
            <h3>⚡ Fast Load Times</h3>
            <p>Optimized assets, clean code, and efficient rendering.</p>
          </div>
          <div className="perf-card">
            <h3>🧠 Scalable Architecture</h3>
            <p>Components designed to grow with your product.</p>
          </div>
          <div className="perf-card">
            <h3>🔒 Reliable Deployments</h3>
            <p>Version control, CI-friendly structure, and clean builds.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          <div className="faq-item">
            <h4>What kind of projects do you work on?</h4>
            <p>
              I work on web applications, landing pages, dashboards, Web3
              products, and performance-focused frontend systems.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you handle both design and development?</h4>
            <p>
              Yes. I focus on clean UI implementation, strong UX decisions, and
              maintainable frontend architecture.
            </p>
          </div>

          <div className="faq-item">
            <h4>What makes your work different?</h4>
            <p>
              I combine engineering thinking with clarity. No over-engineering,
              no clutter — just systems that work and scale.
            </p>
          </div>

          <div className="faq-item">
            <h4>How do we get started?</h4>
            <p>
              Send a message through the contact page with your idea or problem.
              I’ll respond with next steps.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
