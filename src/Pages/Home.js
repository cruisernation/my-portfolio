import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const typingWords = ["I am a Web Developer,", "a Content Writer,", "and a Virtual Assistant."];
const tools = [
  { name: "React", img: "/assets/tools/react.svg" },
  { name: "JavaScript", img: "/assets/tools/javascript.svg" },
  { name: "HTML", img: "/assets/tools/html.svg" },
  { name: "CSS", img: "/assets/tools/css.svg" },
  { name: "Git", img: "/assets/tools/git.svg" },
  { name: "GitHub", img: "/assets/tools/github.svg" },
  { name: "Vercel", img: "/assets/tools/vercel.svg" },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "Web development, Web3-focused content writing, frontend engineering, and virtual assistance tailored for tech products."
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I work remotely with clients globally while being based in Lagos, Nigeria."
  },
  {
    q: "What technologies do you use?",
    a: "React, JavaScript, HTML, CSS, Git, GitHub, Vercel, and modern frontend tooling."
  },
  {
    q: "How fast can you deliver?",
    a: "Delivery depends on scope, but I prioritize performance, clean architecture, and scalability over rushed output."
  }
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Typing Effect
  useEffect(() => {
    const current = typingWords[wordIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="home">
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I’m <span>Aneru</span>
          </h1>

          <h2 className="typing">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            I build high-performance web applications with clean architecture,
            modern tooling, and strong attention to user experience.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn primary">
              View Work
            </Link>
            <Link to="/contact" className="btn outline">
              Hire Me
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/main-pfp.jpeg"
            alt="Aneru profile"
            className="profile-img"
          />
        </div>
      </div>

      {/* STACK */}
      <section className="stack">
        <h3 className="section-title">Tools & Stack</h3>
        <div className="stack-grid">
          {tools.map((t) => (
            <div key={t.name} className="stack-item">
              <img src={t.img} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="performance">
        <h3 className="section-title">Performance First</h3>
        <p>
          Optimized rendering, reusable components, clean codebase,
          accessibility-aware UI, and SEO-friendly structure.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h3 className="section-title">Frequently Asked Questions</h3>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${activeFaq === i ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                {item.q}
                <FiChevronDown />
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
