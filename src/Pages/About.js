import React from "react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "1+" },
    { label: "Projects Completed", value: "4+" },
    { label: "Languages Spoken", value: "English, Yoruba" },
  ];

  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* Left Column: Text */}
        <div className="about-text">
          <p>
            I'm <strong>Aneru Abdulhamid Oshiomah</strong> &{" "}
            <span className="accent">@_shadowofweb3</span> on X (formerly Twitter),
            a content writer, web developer, and virtual assistant. I combine
            technical skills, clear communication, and product-focused storytelling.
          </p>

          <p>
            Based in <strong>Lagos, Nigeria</strong>, I work across Web3, SaaS
            platforms, and emerging tech. I create everything from developer-focused
            content to user-centric experiences. My goal: turn complex ideas into
            clear products and seamless experiences.
          </p>

          <p>
            Working with me means partnering with a professional who understands
            both the "message" and the "medium." I bridge engineering and storytelling
            to guide users effectively.
          </p>

          {/* CV Download */}
          <a href="/assets/ANERU-CV.pdf" download className="btn cv-btn">
            Download CV
          </a>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile */}
        <div className="about-profile">
          <img
            src="/assets/my-pfp.jpg"
            alt="profile"
            className="profile-img"
          />
          <div className="quick-facts">
            <div className="quick-title">Quick Facts</div>
            <ul>
              <li>Hybrid: Web Developer & Copywriter</li>
              <li>Clients: Web3, Startups & Modern Tech</li>
              <li>Core Values: Precision • Clarity • Consistency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
