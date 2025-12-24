import React from 'react';
import CV from './assets/Aneru-CV.pdf'; // Make sure your PDF is inside src/assets/

export default function About() {
  return (
    <section className="about-section" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">About</h2>

      <div className="about">
        {/* Left Column: Text */}
        <div style={{ flex: 2 }}>
          <p style={{ marginBottom: 14 }}>
            I'm <strong>Aneru Abdulhamid Oshiomah</strong> & <span style={{ color: 'var(--accent)' }}>@_shadowofweb3</span> on X (formerly Twitter), a content writer, frontend developer, and virtual assistant. I combine clear communication, technical skills, and product-focused storytelling.
          </p>
          <p style={{ marginBottom: 14 }}>
            Based in <strong>Lagos, Nigeria</strong>, I work across Web3, SaaS platforms, and emerging tech. I create everything from developer-focused content to user-centric experiences. Whether writing or building, my goal is the same: turn complex ideas into clear products and seamless experiences.
          </p>
          <p style={{ marginBottom: 14 }}>
            Working with me means partnering with a professional who understands both the "message" and the "medium." I bridge engineering and storytelling to guide users effectively.
          </p>

          {/* CV Download Button */}
          <div style={{ marginTop: 20 }}>
            <a
              href={CV}
              download
              className="btn"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Profile */}
        <div style={{ flex: 1 }}>
          <img src="./assets/my-pfp.jpg" alt="profile" className="profile-img" />
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 700 }}>Quick Facts</div>
            <ul style={{ marginTop: 8, color: 'var(--muted)' }}>
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
