import React from 'react';

export default function About() {
  return (
    <section className="about-section" style={{ padding: '60px 20px' }}>
      <h2 className="section-title">About</h2>

      <div className="about-container">
        {/* Left Column: Text */}
        <div className="about-text">
          <p>
            I'm <strong>Aneru Abdulhamid Oshiomah</strong> (<span style={{ color: 'var(--accent)' }}>@_shadowofweb3</span>) on X (formerly Twitter), a content writer, frontend developer, and virtual assistant. I combine clear communication, technical skills, and product-focused storytelling to deliver value.
          </p>
          <p>
            Based in <strong>Lagos, Nigeria</strong>, I work across Web3, SaaS, and emerging tech. I create everything from developer-focused content to user-centric experiences. Whether writing or building, my goal is the same: turn complex ideas into clear products and seamless experiences.
          </p>
          <p>
            Working with me means partnering with a professional who understands both the "message" and the "medium." I bridge engineering and storytelling to guide users effectively.
          </p>

          <a href="/assets/Aneru-CV.pdf" download className="btn download-cv">
            Download CV
          </a>
        </div>

        {/* Right Column: Profile */}
        <div className="about-profile">
          <img src="./assets/my-pfp.jpg" alt="profile" className="profile-img" />
          <div className="quick-facts">
            <h4>Quick Facts</h4>
            <ul>
              <li>Hybrid: Frontend Engineer & Copywriter</li>
              <li>Clients: Web3, Startups & Modern Tech</li>
              <li>Core Values: Precision • Clarity • Consistency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
