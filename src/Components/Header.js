import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <div className="brand">
          <img src="/assets/my-pfp.jpg" alt="Profile" />
          <div>
            <h1>Aneru Abdulhamid Oshiomah</h1>
            <span>@_shadowofweb3</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="nav-mobile">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
