import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
  <div className="header-inner">
    <div className="brand">
      <img src="/assets/my-pfp.jpg" alt="profile" />
      <div>
        <h1>Aneru Abdulhamid Oshiomah</h1>
        <span>@_shadowofweb3</span>
      </div>
    </div>

    {/* Desktop Nav */}
    <nav className="nav-desktop">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Projects</a>
      <a href="/contact">Contact</a>
    </nav>

    {/* Hamburger */}
    <button className="hamburger" onClick={toggleMenu}>
      {open ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Nav */}
  {open && (
    <nav className="nav-mobile">
      <a onClick={close}>Home</a>
      <a onClick={close}>About</a>
      <a onClick={close}>Services</a>
      <a onClick={close}>Portfolio</a>
      <a onClick={close}>Contact</a>
    </nav>
  )}
</header>

  );
}
