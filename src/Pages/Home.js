import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const words = ["I am a Web Developer,", "a Content Writer,", "and a Virtual Assistant."];

export default function Home() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((i) => (i + 1) % words.length);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex]);

  return (
    <section className="home-section">
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I am Abdulhamid <br />
            <span className="typing">{text}</span>
          </h1>

          <p className="hero-sub">
            I design and build modern, high-performance web interfaces with
            precision, scalability, and clean engineering.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn primary">
              View Work
            </Link>
            <Link to="/contact" className="btn ghost">
              Hire Me
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/main-pfp.jpeg"
            alt="Aneru Abdulhamid"
            className="hero-img"
          />
        </div>
      </div>

      {/* TOOLS & STACK */}
      <section className="stack-section">
        <h2 className="section-title">Tools & Stack</h2>

        <div className="stack-grid">
          {[
            "react",
            "js",
            "html",
            "css",
            "git",
            "github",
            "vercel",
          ].map((tool) => (
            <div key={tool} className="stack-item">
              <img src={`/assets/tools/${tool}.png`} alt={tool} />
              <span>{tool.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="performance-section">
        <h2 className="section-title">Performance First</h2>
        <p className="section-sub">
          Every build is optimized for speed, accessibility, and scalability.
        </p>

        <div className="perf-grid">
          <div className="perf-card">⚡ Fast load times</div>
          <div className="perf-card">♿ Accessibility-ready</div>
          <div className="perf-card">📈 Scalable architecture</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="section-title">FAQ</h2>

        {[
          {
            q: "What do you specialize in?",
            a: "Frontend web development with modern tools like React, focusing on clean UI, performance, and maintainability.",
          },
          {
            q: "Do you work remotely?",
            a: "Yes. I work remotely with clients globally.",
          },
          {
            q: "How do I start a project?",
            a: "Simply contact me via the contact page and we’ll discuss your goals.",
          },
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {item.q}
              <span>{openFaq === i ? "−" : "+"}</span>
            </button>

            {openFaq === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </section>
    </section>
  );
}
