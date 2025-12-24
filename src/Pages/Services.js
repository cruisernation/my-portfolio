import React from "react";
import { FiCode, FiPenTool, FiCpu, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <FiPenTool size={26} />,
      title: "Web3 Content Writing & Documentation",
      desc: "Clear, credible, and conversion-focused content for Web3 products. Includes whitepapers, litepapers, technical docs, onboarding content, threads, and protocol explainers.",
    },
    {
      icon: <FiCode size={26} />,
      title: "Frontend Development & UI Engineering",
      desc: "Modern React-based interfaces with clean UI systems, responsive layouts, dashboards, and landing pages built for performance, clarity, and scale.",
    },
    {
      icon: <FiCpu size={26} />,
      title: "Virtual Assistant for Tech & Web3 Founders",
      desc: "Reliable virtual assistance covering research, content scheduling, documentation support, community coordination, admin tasks, and workflow organization.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Specialized services at the intersection of Web3, frontend engineering,
          and digital operations — built to support founders, startups, and teams.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>

            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>

            <Link to="/contact" className="service-cta">
              Let’s work together <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
