import React from 'react';
import { FiLayers, FiCode, FiPenTool, FiCpu, FiTrendingUp, FiFeather } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiLayers size={26} />,
      title: "Web3 Product Communication",
      desc: "Messaging systems for blockchain products, token ecosystems, dApps and developer tools. Includes whitepapers, docs, explainers and product flows."
    },
    {
      icon: <FiPenTool size={26} />,
      title: "Copywriting & Conversion Messaging",
      desc: "High-impact copy for landing pages, product launches, funnels, hero sections and SaaS. Written to persuade, convert and communicate value sharply."
    },
    {
      icon: <FiCode size={26} />,
      title: "Frontend Development & UI Engineering",
      desc: "Modern React interfaces with clean UI/UX, dashboards, components, landing pages and fully responsive builds optimized for performance."
    },
    {
      icon: <FiCpu size={26} />,
      title: "Web3 Content & Thought Leadership",
      desc: "Technical content, deep-dive articles, educational threads and blockchain research crafted for credibility, clarity and authority."
    },
    {
      icon: <FiTrendingUp size={26} />,
      title: "Product Strategy & Digital Positioning",
      desc: "Narrative development, brand voice systems, messaging architecture and content roadmaps designed to shape how products are understood."
    },
    {
      icon: <FiFeather size={26} />,
      title: "Micro-Branding for Tech & Startups",
      desc: "Identity systems for founders and fast-growing brands; including tone, taglines, style frameworks and narrative-driven micro-branding."
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card float-up">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
