import React from "react";
import { FiPenTool, FiCode, FiBriefcase } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiPenTool size={28} />,
      title: "Web3 Content Writing & Documentation",
      desc: "Clear, authoritative content for Web3 products including whitepapers, litepapers, dApp explanations, token documentation, threads, and educational articles. Built to simplify complex blockchain concepts and build trust."
    },
    {
      icon: <FiCode size={28} />,
      title: "Frontend Development (React)",
      desc: "Modern, responsive frontend development using React. Clean UI systems, landing pages, dashboards, and component-based builds focused on performance, usability, and visual clarity."
    },
    {
      icon: <FiBriefcase size={28} />,
      title: "Virtual Assistant for Tech & Web3 Founders",
      desc: "Reliable virtual assistance covering research, content support, documentation handling, scheduling, email management, data organization, and operational support — tailored for tech-driven teams."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Specialized support across Web3 communication, frontend development, and operational assistance.
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
    </section>
  );
}
