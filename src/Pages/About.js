import React from 'react';

export default function About() {
  return (
    <section style={{ paddingTop: 40, paddingBottom: 40 }}>
      <h2 className="section-title">About</h2>
      <div className="about">
        <div style={{ flex: 2 }}>
          <p style={{ marginBottom: 14 }}>
            I'm <strong>Aneru Abdulhamid Oshiomah</strong> & <span style={{ color: 'var(--accent)' }}>@_shadowofweb3</span> on X (formerly Twitter), a content writer and frontend developer. I combine clear communication, technical skills and product-focused storytelling.
          </p>
          <p style={{ marginBottom: 14 }}>
            I work in web3 ecosystem, SaaS platforms, and emerging technology. I create everything from content for developers to user-focused experiences. Whether I'm writing or building, my goal is the same: turn complex ideas into clear products and products into smooth user experiences.
          </p>
          <p style={{ marginBottom: 14 }}>
            When you work with me, you get a professional who understands both the "message" and the "medium". I know the engineering behind the screen and the words that guide the user.
          </p>

          <div style={{ marginTop: 20 }}>
            <a
              href="/assets/Aneru-CV.pdf"
              download
              className="btn"
            >
              Download CV
            </a>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <img src="./assets/my-pfp.jpg" alt="profile" className="profile-img" />
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 700 }}>Quick facts</div>
            <ul style={{ marginTop: 8, color: 'var(--muted)' }}>
              <li>Hybrid: Frontend Engineer x Copywriter</li>
              <li>Clients: Web3, Startups & Modern Tech</li>
              <li>Value: Precision • Clarity • Consistency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
