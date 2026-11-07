
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Hamza Rafa | Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #080b14;
  color: white;
  min-height: 100vh;
}

.background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 15% 20%, #312e8150, transparent 35%),
    radial-gradient(circle at 85% 80%, #07598540, transparent 35%),
    #080b14;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 35px 25px;
}

/* Navigation */

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
}

.logo {
  font-size: 25px;
  font-weight: 800;
}

.logo span {
  color: #818cf8;
}

.nav-text {
  color: #94a3b8;
  font-size: 12px;
  letter-spacing: 2px;
}

/* Hero */

.hero {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: center;
  animation: appear 1s ease;
}

.tag {
  display: inline-block;
  padding: 10px 16px;
  border: 1px solid #6366f155;
  border-radius: 30px;
  background: #6366f115;
  color: #a5b4fc;
  font-size: 12px;
  margin-bottom: 25px;
}

h1 {
  font-size: clamp(42px, 7vw, 70px);
  line-height: 1.1;
  letter-spacing: -3px;
  margin-bottom: 20px;
}

h1 span {
  background: linear-gradient(90deg, #818cf8, #38bdf8);
  -webkit-background-clip: text;
  color: transparent;
}

.description {
  color: #94a3b8;
  line-height: 1.9;
  font-size: 15px;
  max-width: 550px;
  margin-bottom: 30px;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.info span {
  background: #ffffff09;
  border: 1px solid #ffffff15;
  padding: 11px 14px;
  border-radius: 10px;
  color: #cbd5e1;
  font-size: 12px;
}

/* Profile */

.profile-card {
  background: linear-gradient(145deg, #1e293b, #111827);
  border: 1px solid #ffffff18;
  border-radius: 25px;
  padding: 35px;
  text-align: center;
  box-shadow: 0 25px 70px #00000050;
  transition: 0.3s;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.avatar {
  width: 190px;
  height: 190px;
  margin: auto auto 25px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #818cf8, #38bdf8);
  box-shadow: 0 0 40px #6366f155;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #111827;
}

.profile-card h2 {
  font-size: 25px;
  margin-bottom: 10px;
}

.profile-card p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.8;
}

.line {
  height: 1px;
  background: #ffffff15;
  margin: 25px 0;
}

.status {
  color: #4ade80;
  font-size: 12px;
}

/* Social Media */

.social-section {
  margin-top: 110px;
}

.social-section h2 {
  font-size: 32px;
  margin-bottom: 12px;
}

.social-section > p {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 30px;
}

.socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.social {
  text-decoration: none;
  color: white;
  background: #ffffff08;
  border: 1px solid #ffffff15;
  border-radius: 18px;
  padding: 28px 15px;
  text-align: center;
  transition: 0.3s;
}

.social:hover {
  transform: translateY(-8px);
  background: #6366f120;
  border-color: #818cf8;
  box-shadow: 0 10px 30px #6366f120;
}

.social .icon {
  font-size: 32px;
  margin-bottom: 15px;
}

.social h3 {
  font-size: 15px;
  margin-bottom: 8px;
}

.social p {
  color: #94a3b8;
  font-size: 11px;
}

/* Academic Section */

.academic {
  margin-top: 80px;
  padding: 30px;
  border-radius: 20px;
  background: #ffffff08;
  border: 1px solid #ffffff15;
}

.academic h2 {
  margin-bottom: 20px;
  font-size: 23px;
}

.academic p {
  color: #94a3b8;
  line-height: 2;
  font-size: 14px;
}

/* Footer */

footer {
  border-top: 1px solid #ffffff15;
  margin-top: 90px;
  padding: 30px 0;
  text-align: center;
  color: #64748b;
  font-size: 12px;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */

@media (max-width: 750px) {
  nav {
    margin-bottom: 60px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .profile-card {
    max-width: 400px;
    width: 100%;
    margin: auto;
  }

  .socials {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-section {
    margin-top: 75px;
  }

  h1 {
    letter-spacing: -2px;
  }
}

@media (max-width: 400px) {
  .socials {
    grid-template-columns: 1fr;
  }
}
</style>
</head>

<body>

<div class="background"></div>

<div class="container">

  <nav>
    <div class="logo">HR<span>.</span></div>
    <div class="nav-text">PERSONAL PORTFOLIO / 2026</div>
  </nav>

  <section class="hero">

    <div>

      <div class="tag">
        ✦ SOFTWARE ENGINEERING STUDENT
      </div>

      <h1>
        Hello, I'm<br>
        <span>Hamza Rafa.</span>
      </h1>

      <p class="description">
        A fifth-year Software Engineering student at
        Université M'hamed Bougara de Boumerdès (UMBB).
        Passionate about technology, Artificial Intelligence,
        software development and innovative solutions.
        Always learning, building and exploring new possibilities.
      </p>

      <div class="info">
        <span>🎓 UMBB</span>
        <span>💻 Software Engineering</span>
        <span>🚀 DevOps & Cloud Computing</span>
        <span>📚 Lab 4</span>
      </div>

    </div>

    <div class="profile-card">

      <div class="avatar">
        <img src="/hamza.png" alt="Hamza Rafa">
      </div>

      <h2>Hamza Rafa</h2>

      <p>
        Software Engineering<br>
        5th Year Student
      </p>

      <div class="line"></div>

      <div class="status">
        ● Exploring Technology & Innovation
      </div>

    </div>

  </section>

  <section class="social-section">

    <h2>Let's Connect.</h2>

    <p>
      Find me on my social media platforms.
    </p>

    <div class="socials">

      <a class="social"
         href="https://www.instagram.com/imhamzarafa/"
         target="_blank"
         rel="noopener noreferrer">

        <div class="icon">📸</div>
        <h3>Instagram</h3>
        <p>@imhamzarafa</p>

      </a>

      <a class="social"
         href="https://www.snapchat.com/add/hemzaax24"
         target="_blank"
         rel="noopener noreferrer">

        <div class="icon">👻</div>
        <h3>Snapchat</h3>
        <p>@hemzaax24</p>

      </a>

      <a class="social"
         href="https://www.linkedin.com/in/hamza-rafa-9b0905298/"
         target="_blank"
         rel="noopener noreferrer">

        <div class="icon">💼</div>
        <h3>LinkedIn</h3>
        <p>Hamza Rafa</p>

      </a>

      <a class="social"
         href="https://web.facebook.com/imhamzarafa"
         target="_blank"
         rel="noopener noreferrer">

        <div class="icon">🌐</div>
        <h3>Facebook</h3>
        <p>imhamzarafa</p>

      </a>

    </div>

  </section>

  <section class="academic">

    <h2>Academic Background</h2>

    <p>
      <strong>University:</strong> Université M'hamed
      Bougara de Boumerdès (UMBB)<br>

      <strong>Faculty:</strong> Faculty of Sciences<br>

      <strong>Department:</strong> Computer Science<br>

      <strong>Specialization:</strong> Software Engineering<br>

      <strong>Module:</strong> DevOps and Cloud Computing<br>

      <strong>Practical Work:</strong> Lab 4<br>

      <strong>Academic Year:</strong> 2026–2027
    </p>

  </section>

  <footer>
    © 2026 Hamza Rafa. All rights reserved.
    <br><br>
    Designed with passion | DevOps & Cloud Computing
  </footer>

</div>

</body>
</html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
