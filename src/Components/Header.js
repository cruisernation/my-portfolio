import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <div className="brand">
          <img src="/assets/my-pfp.jpg" alt="Profile" />
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

        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {open && (
        <nav className="nav-mobile">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
