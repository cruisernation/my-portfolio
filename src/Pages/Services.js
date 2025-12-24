import React from "react";
import { FiPenTool, FiCode, FiCpu } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiPenTool size={28} />,
      title: "Web3 Content & Product Writing",
      subtitle: "Clarity for complex blockchain products",
      desc: "I help Web3 projects communicate clearly and credibly. From token documentation and dApp onboarding content to educational threads and product explainers, I translate complex blockchain ideas into content users, investors, and developers actually understand.",
      points: [
        "Whitepapers & litepapers",
        "Token & protocol documentation",
        "dApp onboarding & UX copy",
        "Web3 threads & educational content",
      ],
    },
    {
      icon: <FiCode size={28} />,
      title: "Frontend Development",
      subtitle: "Clean, responsive, user-focused interfaces",
      desc: "I build modern frontend interfaces with React, focusing on clean UI, strong layout structure, and real usability. Ideal for landing pages, dashboards, and product-focused websites that need to look sharp and perform smoothly.",
      points: [
        "React & modern JavaScript",
        "Landing pages & dashboards",
        "Responsive UI engineering",
        "Performance-focused builds",
      ],
    },
    {
      icon: <FiCpu size={28} />,
      title: "Virtual Assistant for Tech & Web3",
      subtitle: "Reliable support for founders & teams",
      desc: "I support founders, developers, and Web3 teams with structured virtual assistance. From research and documentation support to content scheduling and technical admin tasks, I help you stay focused on building while I handle the details.",
      points: [
        "Research & data organization",
        "Content publishing & scheduling",
        "Documentation & admin support",
        "Tech & Web3 operational tasks",
      ],
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">What I Do</h2>
      <p className="section-sub">
        Specialized services at the intersection of Web3, frontend development,
        and digital support.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card float-up">
            <div className="service-icon">{s.icon}</div>

            <h3 className="service-title">{s.title}</h3>
            <p className="service-subtitle">{s.subtitle}</p>

            <p className="service-desc">{s.desc}</p>

            <ul className="service-points">
              {s.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
