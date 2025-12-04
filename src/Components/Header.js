import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className="header">
      <div className="container" style= {{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="./assets/my-pfpjs.jpg" alt="logo" className="logo" />
          <div>
            <div className="site-title">Aneru Abdulhamid Oshiomah</div>
            <div style={{color:'var(--muted)',fontSize:13}}> @_shadowofweb3 </div>
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
