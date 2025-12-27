/* ==============================
   HERO LAYOUT
================================ */

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 56px;
  align-items: center;
  padding: 96px 0 72px;
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 0 56px;
  }
}

/* ==============================
   HERO LEFT
================================ */

.hero-left {
  max-width: 720px;
}

.h1 {
  font-size: clamp(34px, 4vw, 46px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
  color: #0a1324;
}

.lead {
  font-size: 16.5px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 640px;
  margin-bottom: 32px;
}

/* ==============================
   CTA BUTTONS
================================ */

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14.5px;
  border: none;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--accent),
    var(--accent-2)
  );
  box-shadow: 0 10px 26px rgba(0, 40, 120, 0.18);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(0, 40, 120, 0.28);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.btn-outline:hover {
  background: rgba(0, 0, 0, 0.03);
  transform: none;
}

/* ==============================
   HERO RIGHT / PROFILE CARD
================================ */

.hero-right {
  display: flex;
  justify-content: center;
}

.hero-card {
  width: 100%;
  max-width: 340px;
  padding: 28px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9),
    rgba(245, 247, 252, 0.9)
  );
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  text-align: center;
}

.hero-card img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 18px;
}

.hero-card-name {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
}

.hero-card-role {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

/* ==============================
   TOOL / STACK STRIP
================================ */

.tech-stack {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tech-pill {
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.04);
  color: #0a1324;
  font-weight: 500;
}

/* ==============================
   PERFORMANCE TAG
================================ */

.performance-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--accent);
}
