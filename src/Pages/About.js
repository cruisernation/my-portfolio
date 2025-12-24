import React from 'react';

export default function About() {
  return (
    <section className="about-section" style={{ padding: '60px 20px' }}>
      <h2 className="section-title">About</h2>

      <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {/* Left Column: Text */}
        <div style={{ flex: 2, minWidth: '280px' }}>
          <p style={{ marginBottom: '14px' }}>
            I'm <strong>Aneru Abdulhamid Oshiomah</strong> & <span style={{ color: 'var(--accent)' }}>@_shadowofweb3</span> on X (formerly Twitter), a content writer, frontend developer, and virtual assistant. I combine clear communication, technical skills, and product-focused storytelling.
          </p>

          <p style={{ marginBottom: '14px' }}>
            Based in <strong>Lagos, Nigeria</strong>, I work across Web3, SaaS platforms, and emerging tech. I create everything from developer-focused content to user-centric experiences. Whether writing or building, my goal is the same: turn complex ideas into clear products and seamless experiences.
          </p>

          <p style={{ marginBottom: '14px' }}>
            Working with me means partnering with a professional who understands both the "message" and the "medium." I bridge engineering and storytelling to guide users effectively.
          </p>

          {/* CV Download Button */}
          <div style={{ marginTop: '20px' }}>
            <a
              href="/assets/Aneru-CV.pdf"
              download="Aneru-CV.pdf"
              className="btn"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Profile */}
        <div style={{ flex: 1, minWidth: '220px', textAlign: 'center' }}>
          <img
            src="/assets/my-pfp.jpg"
            alt="profile"
            style={{ width: '100%', maxWidth: '180px', borderRadius: '16px', marginBottom: '16px' }}
          />
          <div>
            <div style={{ fontWeight: 700, marginBottom: '8px' }}>Quick Facts</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--muted)', lineHeight: 1.5 }}>
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
