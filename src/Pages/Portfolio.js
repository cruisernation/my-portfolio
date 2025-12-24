import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaCubes, FaCode, FaPenNib } from "react-icons/fa6";

const PROJECTS = [
  {
    id: "web3-coming-soon",
    title: "Web3 Case Studies Coming Soon",
    category: "Web3",
    summary:
      "Blockchain UX, token documentation, dApp onboarding, and protocol content currently in progress.",
    details:
      "My upcoming Web3-focused work will include token documentation, protocol-level storytelling, dApp onboarding flows, and smart contract focused product messaging.",
    link: null,
    comingSoon: true,
  },
  {
    id: "real-property-nine",
    title: "Real-Property Nine Landing & UX Rebuild",
    category: "Frontend",
    summary:
      "React landing page rebuild, clean UI system, UX copywriting, and responsive layout development.",
    details:
      "Developed a polished real-estate landing experience using React. Focused on modern UI structure, responsive components, strong visual hierarchy, and persuasive messaging for better conversion. Full website available via live link.",
    link: "https://real-property-nine.vercel.app",
  },
  {
    id: "shadowofweb3-content",
    title: "Content & Thought Leadership @_shadowofweb3",
    category: "Content",
    summary:
      "Web3 threads, product breakdowns, technical explanations, and community-driven content.",
    details:
      "My X (Twitter) profile highlights consistent Web3 insights, narrative breakdowns, technical discussions, content strategy, and brand clarity posts blending code, blockchain, and communication.",
    link: "https://x.com/_shadowofweb3",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", "Web3", "Frontend", "Content"];
  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="portfolio-section">
      {/* Portfolio Header */}
      <div className="portfolio-header">
        <div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-sub">
            A curated mix of frontend builds, strategic content, and upcoming Web3
            case studies.
          </p>
        </div>

        <div className="filter-row">
          {categories.map((c) => (
            <button
              key={c}
              className={`pill ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <article
            key={p.id}
            className={`project-card ${p.comingSoon ? "coming-soon" : ""}`}
            onClick={() => !p.comingSoon && setSelected(p)}
            style={{ animationDelay: `${i * 70}ms` }}
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" && !p.comingSoon ? setSelected(p) : null)}
            aria-label={p.title}
          >
            <div className="card-top">
              <div className="card-icon">
                {p.category === "Web3" ? (
                  <FaCubes />
                ) : p.category === "Frontend" ? (
                  <FaCode />
                ) : (
                  <FaPenNib />
                )}
              </div>
              <h3 className="project-title">{p.title}</h3>
            </div>

            <p className="project-summary">{p.summary}</p>

            <div className="card-meta">
              <span className="tag">{p.category}</span>
              {!p.comingSoon && (
                <a
                  className="project-live-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit live <FiExternalLink />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog">
            <div className="modal-head">
              <h3>{selected.title}</h3>
              {selected.link && (
                <a
                  className="modal-live-cta"
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Live Project <FiExternalLink />
                </a>
              )}
            </div>

            <p className="modal-summary">{selected.details}</p>

            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
