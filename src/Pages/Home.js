import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section style={{paddingTop:40,paddingBottom:40}}>
      <div className="hero">
        <div className="hero-left">
          <h1 className="h1">I write. I code. I create impact</h1>
          <p className="lead">I handle everything from content to frontend. Whether it's web3 or everyday tech, I transform complex ideas into simple experiences that engage, convert and inspire.</p>
          <div style={{marginTop:20}}>
            <Link to="/portfolio"><button className="btn">View portfolio</button></Link>
            <Link to="/contact" style={{marginLeft:12}}><button className="btn" style={{background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}>Hire me</button></Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="card float" style={{width:320,textAlign:'center'}}>
            <img src="./assets/main-pfp.jpeg" alt="profile" style={{width:200,height:200,borderRadius:12,marginBottom:16}}/>
            <div style={{fontWeight:700}}>Aneru Abdulhamid Oshiomah</div>
            <div style={{color:'var(--muted)',marginTop:6}}>Content Writer • Frontend Developer • Blockchain Enthusiast</div>
          </div>
        </div>
      </div>

    <section className="content-showcase">
      <h2 className="section-title">Featured Content & Writing</h2>
      <p className="section-sub">A mix of Web3 explainers, technical deep dives, and conversion-focused product content. Everything crafted for clarity, precision, and storytelling.</p>

    <div className="content-grid">
    {[
      {
        icon: "🧩",
        title: "Breaking Down dApp Architecture",
        desc: "A simplified explanation of smart contract layers, data flow, and wallet interactions.",
      },
      {
        icon: "⚡",
        title: "How Token Utility Drives Real Adoption",
        desc: "A strategic and technical look at token design and real-value ecosystems.",
      },
      {
        icon: "🔗",
        title: "EVM Gas Optimization: A Non-Dev Guide",
        desc: "Helping users and founders understand gas costs without diving into Solidity.",
      },
      {
        icon: "🚀",
        title: "Launching a Product in Web3",
        desc: "From messaging to UI to onboarding a practical guide for early-stage teams.",
      },
      {
        icon: "📘",
        title: "Brand Storytelling for Modern Tech",
        desc: "How clean copy, visuals, and UX combine to create strong digital identities.",
      },
      {
        icon: "🛠️",
        title: "Building with React for Web3",
        desc: "UI patterns, reusable components, and best practices for blockchain interfaces.",
      }
    ].map((item, index) => (
      <div key={index} className="content-card fade-in">
        <div className="icon-circle">{item.icon}</div>
        <h3 className="content-title">{item.title}</h3>
        <p className="content-desc">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
    </section>
  );
}

