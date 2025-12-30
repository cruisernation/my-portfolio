import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Safety: close mobile menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Brand */}
        <div className="brand">
          <img src="/assets/my-pfp.jpg" alt="Profile" className="logo" />
          <div className="brand-text">
            <h1>Aneru Abdulhamid Oshiomah</h1>
            <span>@_shadowofweb3</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Hamburger (Mobile Only) */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/portfolio" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}
