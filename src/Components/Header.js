import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-wrapper">
        
        <div className="brand">
          <img src="./assets/my-pfpjs.jpg" alt="logo" className="logo" />
          <div>
            <div className="site-title">Aneru Abdulhamid Oshiomah</div>
            <div className="site-handle">@_shadowofweb3</div>
          </div>
        </div>

        <nav className="nav desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <Link onClick={closeMenu} to="/">Home</Link>
          <Link onClick={closeMenu} to="/about">About</Link>
          <Link onClick={closeMenu} to="/services">Services</Link>
          <Link onClick={closeMenu} to="/portfolio">Portfolio</Link>
          <Link onClick={closeMenu} to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
