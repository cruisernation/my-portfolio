import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // make sure you have a corresponding CSS file

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Brand */}
        <div className="brand">
          <img src="/assets/my-pfp.jpg" alt="profile" className="logo" />
          <div className="brand-text">
            <h1 className="site-title">Aneru Abdulhamid Oshiomah</h1>
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

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="nav-mobile">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
