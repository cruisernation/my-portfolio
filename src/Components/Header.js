import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Brand */}
        <div className="brand">
          <img src="/assets/my-pfp.jpg" alt="profile" className="logo" />
          <div>
            <h1 className="site-title">Aneru Abdulhamid</h1>
            <span>@_shadowofweb3</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
}
