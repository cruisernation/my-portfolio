import React from "react";
import {
  FiCode,
  FiPenTool,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiPenTool size={28} />,
      title: "Web3 Content Writing & Product Communication",
      desc: "Clear, credible communication for blockchain products. I write whitepapers, documentation, explainers, landing copy, and technical content that makes complex Web3 ideas understandable and trusted.",
    },
    {
      icon: <FiCode size={28} />,
      title: "Frontend Development & UI Engineering",
      desc: "Modern, responsive React interfaces built for clarity and performance. From landing pages to dashboards, I focus on clean UI, usability, and conversion-driven layouts.",
    },
    {
      icon: <FiCpu size={28} />,
      title: "Virtual Assistance for Tech & Web3 Teams",
      desc: "Reliable support for founders and teams — research, content management, documentation, scheduling, community support, and daily operational tasks handled with precision.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          I help Web3 founders and digital teams communicate better, build cleaner interfaces,
          and stay focused by handling both technical and operational work.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h3 className="cta-title">Have a project in mind?</h3>
        <p className="cta-text">
          Whether you need Web3 content, frontend development, or a reliable virtual assistant,
          let’s discuss how I can support your goals.
        </p>

        <a href="#contact" className="cta-btn">
          Start a conversation <FiArrowRight />
        </a>
      </div>
    </section>
  );
}
