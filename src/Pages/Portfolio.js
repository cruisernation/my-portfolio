import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const FEATURED_PROJECTS = [
  {
    id: "midex-royale-inn",
    title: "Midex Royale Inn",
    description:
      "A modern hospitality website with clean UI, responsive layout, and performance-focused architecture.",
    image: "/assets/projects/midex-royale.png",
    live: "https://midex-royale-inn.vercel.app/",
    github: "https://github.com/cruisernation/midex-royale-inn",
    tools: ["React", "JavaScript", "CSS", "Git", "Vercel"],
  },
  {
    id: "real-property-nine",
    title: "Real Property Nine",
    description:
      "Real estate landing page built with React, focusing on conversion, clarity, and responsive UX.",
    image: "/assets/projects/real-property.png",
    live: "https://real-property-nine.vercel.app/",
    github: "https://github.com/cruisernation/real-property-nine",
    tools: ["React", "CSS", "HTML", "Git", "Vercel"],
  },
];

const OTHER_PROJECTS = [
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    description: "Developer portfolio showcasing projects, skills, and contact flow.",
    image: "/assets/projects/portfolio.png",
    live: "https://my-portfolio-weld-rho-83.vercel.app/",
    github: "https://github.com/cruisernation/my-portfolio",
    tools: ["React", "CSS", "JavaScript", "GitHub"],
  },
  {
    id: "landing-ui",
    title: "Product Landing UI",
    description: "Clean landing page UI with focus on layout, typography, and performance.",
    image: "/assets/projects/landing-ui.png",
    live: "#",
    github: "#",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "dashboard-ui",
    title: "Admin Dashboard UI",
    description: "Frontend dashboard interface with reusable components and layout system.",
    image: "/assets/projects/dashboard.png",
    live: "#",
    github: "#",
    tools: ["React", "CSS", "Git"],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      {/* HEADER */}
      <div className="portfolio-header">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">
          Selected frontend projects focused on performance, clarity, and scalable UI.
        </p>
      </div>

      {/* FEATURED PROJECTS */}
      <div className="featured-projects">
        {FEATURED_PROJECTS.map((p) => (
          <article key={p.id} className="featured-card">
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tool-list">
                {p.tools.map((tool) => (
                  <span key={tool} className="tool-badge">{tool}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn primary">
                  Live Demo <FiExternalLink />
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn ghost">
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* OTHER PROJECTS */}
      <div className="portfolio-grid">
        {OTHER_PROJECTS.map((p) => (
          <article key={p.id} className="project-card">
            <img src={p.image} alt={p.title} className="project-image small" />

            <h4>{p.title}</h4>
            <p>{p.description}</p>

            <div className="tool-list">
              {p.tools.map((tool) => (
                <span key={tool} className="tool-badge">{tool}</span>
              ))}
            </div>

            <div className="project-actions">
              <a href={p.live} className="btn small primary">Live</a>
              <a href={p.github} className="btn small ghost">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
