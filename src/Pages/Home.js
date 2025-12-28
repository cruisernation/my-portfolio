import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const words = ["I code.", "I build.", "I optimize."];

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  // Typing effect
  useEffect(() => {
    const current = words[index];
    if (char < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[char]);
        setChar(char + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setChar(0);
        setIndex((index + 1) % words.length);
      }, 1200);
    }
  }, [char, index]);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "Web development, Web3 content writing, frontend engineering, performance optimization, and virtual assistance."
    },
    {
      q: "Do you work remotely?",
      a: "Yes. I work fully remote with clients across different regions."
    },
    {
      q: "What tools do you use?",
      a: "React, JavaScript, HTML, CSS, Git, GitHub, Vercel, and modern performance-first workflows."
    },
    {
      q: "How do you handle performance?",
      a: "I optimize for speed, accessibility, SEO, and clean architecture from the start."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="home">
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            {text}
            <span className="cursor">|</span>
          </h1>

          <p className="hero-sub">
            Web Developer focused on clean UI, performance, and modern web systems.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn">View Portfolio</Link>
            <Link to="/contact" className="btn ghost">Hire Me</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img src="/assets/main-pfp.jpeg" alt="profile" />
            <h3>Aneru Abdulhamid Oshiomah</h3>
            <p>Web Developer • Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <section className="tools">
        <h2 className="section-title">Tools & Stack</h2>
        <div className="tools-grid">
          {["React", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Vercel", "ML"].map(t => (
            <span key={t} className="tool">{t}</span>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="performance">
        <h2 className="section-title">Performance First</h2>
        <p>
          I build fast-loading, accessible, SEO-ready interfaces optimized for real users and real devices.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2 className="section-title">FAQ</h2>

        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              {item.q}
            </button>

            {openFAQ === i && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </section>
    </section>
  );
}
