import React from "react";
import { FiLayers, FiCode, FiPenTool, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <FiLayers size={26} />,
      title: "Web3 Content & Product Writing",
      desc: "Clear, credible communication for blockchain products — including whitepapers, documentation, token narratives, dApp explainers, and onboarding content.",
    },
    {
      icon: <FiCode size={26} />,
      title: "Frontend Development",
      desc: "Modern, responsive React interfaces built with clean UI systems, performance in mind, and strong UX foundations for startups and digital products.",
    },
    {
      icon: <FiPenTool size={26} />,
      title: "Virtual Assistance for Tech & Creators",
      desc: "Reliable support across content management, research, documentation, inbox handling, scheduling, and operational tasks tailored for founders and teams.",
    },
  ];

  return (
    <section className="services-section" style={{ marginTop: "58px" }}>
      <div className="services-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Specialized services designed to help Web3 products, startups, and
          founders communicate clearly, build efficiently, and scale smoothly.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>

            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>

            <Link to="/contact" className="service-cta">
              Let’s talk <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
