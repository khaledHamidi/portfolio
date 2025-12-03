---
title: 'Home'
type: landing
sections:
  - block: markdown
    content:
      title: ''
      text: |
        <div class="hero-section" style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 2.2rem 4%; box-sizing: border-box;">
          <style>
            .hero-section { color: #111528; background: linear-gradient(to bottom, #f7f8fc 0%, #ffffff 100%); }
            .dark .hero-section { background: linear-gradient(180deg, #05060e 0%, #0f1324 100%); color: #f5f6ff; }
            .hero-grid { max-width: 1400px; margin: 0 auto; display: flex; gap: 1.25rem; align-items: stretch; justify-content: space-between; flex-wrap: wrap; }
            .hero-profile-card {
              flex: 1 1 320px;
              background: #fff;
              padding: 1.6rem;
              border-radius: 18px;
              box-shadow: 0 14px 35px rgba(15,23,42,0.12);
              border: 1px solid rgba(15,23,42,0.05);
            }
            .dark .hero-profile-card {
              background: rgba(13,16,28,0.95);
              border-color: rgba(129,140,248,0.25);
              box-shadow: 0 18px 40px rgba(0,0,0,0.55);
            }
            .hero-profile-card h2 { margin: 0.2rem 0; font-size: 1.55rem; color: inherit; }
            .hero-profile-card p { margin: 0; color: #566074; font-size: 0.95rem; }
            .dark .hero-profile-card p { color: #cbd2ea; }
            .hero-meta-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #4b5164; }
            .hero-meta-row strong { color: #111528; }
            .dark .hero-meta-row { color: #b7bdd6; }
            .dark .hero-meta-row strong { color: #f7f8ff; }
            .hero-links { display: flex; gap: 0.55rem; flex-wrap: wrap; justify-content: center; }
            .hero-links a {
              flex: 1 1 110px;
              text-align: center;
              padding: 0.5rem 0.8rem;
              color: #fff;
              text-decoration: none;
              border-radius: 8px;
              font-size: 0.9rem;
              font-weight: 600;
            }
            .hero-stats { flex: 1 1 260px; display: flex; align-items: center; justify-content: center; }
            .hero-stat-strip { display: flex; gap: 0.6rem; width: 100%; justify-content: center; flex-wrap: nowrap; min-width: 240px; }
            .hero-stat-card {
              flex: 1;
              min-width: 90px;
              padding: 1rem 0.7rem;
              border-radius: 14px;
              text-align: center;
              color: #fff;
              box-shadow: 0 12px 25px rgba(15,23,42,0.25);
            }
            .hero-stat-card h4 { font-size: 1.7rem; margin: 0; font-weight: 700; }
            .hero-stat-card p { margin: 0.1rem 0 0 0; font-size: 0.72rem; letter-spacing: 0.5px; text-transform: uppercase; }
            .hero-stat-card.purple { background: linear-gradient(135deg, #6c63ff 0%, #7f6bda 100%); }
            .hero-stat-card.pink { background: linear-gradient(135deg, #ff80b5 0%, #ff6b6b 100%); }
            .hero-stat-card.cyan { background: linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%); }
            .hero-slider-shell { position: relative; width: 100%; height: 100%; border-radius: 24px; overflow: hidden; box-shadow: 0 35px 80px rgba(7,10,18,0.45); }
            .dark .hero-slider-shell { box-shadow: 0 45px 90px rgba(0,0,0,0.65); }
          </style>
          <div class="hero-grid">
            <div class="hero-profile-card">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.4rem; margin-bottom: 1rem;">
                <div style="width: 130px; height: 130px; border-radius: 65px; overflow: hidden; border: 4px solid #667eea;">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQGOWF7a_NvOPg/profile-displayphoto-shrink_800_800/B4DZdFETNpHAAg-/0/1749210445136?e=1766620800&v=beta&t=bq3umVfviafLRdLRWHjtO3uQhqSootb5XfZTXthqyYk" alt="Khaled HAMIDI" style="width: 100%; height: 100%; object-fit: cover; margin: 0 !important; display: block;">
                </div>
                  <h2>Khaled HAMIDI</h2>
                  <p>Lead Mechatronics & Aerospace Engineer</p>
                  <p style="font-size: 0.88rem;">Intelligent Systems Architect</p>
              </div>
                <div style="display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1rem;">
                  <div class="hero-meta-row"><span>Location</span><strong>Doha · Remote</strong></div>
                  <div class="hero-meta-row"><span>Experience</span><strong>7+ years</strong></div>
                  <div class="hero-meta-row"><span>Focus</span><strong>Robotics · AI · IoT</strong></div>
                  <div class="hero-meta-row"><span>Availability</span><strong>Consulting & R&D</strong></div>
              </div>
                <div class="hero-links">
                  <a href="mailto:hamidi@engineer.com" style="background: linear-gradient(135deg, #6c63ff 0%, #8f7afa 100%);">Email</a>
                  <a href="https://github.com/khaledHamidi" style="background: #1f2432;">GitHub</a>
                  <a href="https://linkedin.com/in/enghamidi" style="background: #0a66c2;">LinkedIn</a>
              </div>
            </div>
            <div style="flex: 2 1 520px; align-self: stretch; display: flex;">
              <style>
                .hero-slider-shell { position: relative; width: 100%; height: 100%; border-radius: 24px; overflow: hidden; box-shadow: 0 35px 80px rgba(7,10,18,0.45); }
                .hero-slider-window { width: 100%; height: 100%; overflow: hidden; }
                .hero-slider-track { display: flex; height: 100%; transition: transform 0.6s cubic-bezier(0.42,0.05,0.2,1); }
                .hero-slider-slide { min-width: 100%; height: 100%; position: relative; }
                .hero-slider-image { width: 100%; height: 100%; background-size: cover; background-position: center; position: relative; }
                .hero-slider-image::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18), transparent 50%), linear-gradient(180deg, rgba(4,5,10,0.05) 0%, rgba(4,5,10,0.85) 100%); }
                .hero-slider-text { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.85rem; color: #fff; z-index: 1; }
                .hero-slider-text h4 { margin: 0; font-size: 1.5rem; letter-spacing: 0.03em; }
                .hero-slider-text p { margin: 0.35rem 0 0; font-size: 1rem; color: rgba(255,255,255,0.88); }
                .hero-slider-btn { position: absolute; top: 1.6rem; right: 1.2rem; width: 46px; height: 46px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.35); background: rgba(6,8,12,0.78); color: #fff; cursor: pointer; font-size: 1.35rem; z-index: 2; transition: background 0.2s ease, transform 0.2s ease; }
                .hero-slider-btn--prev { right: 4.6rem; }
                .hero-slider-btn:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }
                @media (max-width: 960px) {
                  .hero-slider-shell { min-height: 360px; }
                }
              </style>
              <div class="hero-slider-shell" id="hero-featured-slider">
                <button class="hero-slider-btn hero-slider-btn--prev" data-hero-slider-prev aria-label="Previous project">&#10094;</button>
                <button class="hero-slider-btn" data-hero-slider-next aria-label="Next project">&#10095;</button>
                <div class="hero-slider-window">
                  <div class="hero-slider-track" data-hero-slider-track>
                    <a class="hero-slider-slide" data-hero-slide href="/projects/pharmacy/">
                      <div class="hero-slider-image" style="background-image: url('/projects/pharmacy/featured.png');">
                        <div class="hero-slider-text">
                          <h4>Pharmacy Plus</h4>
                          <p>Enterprise desktop automation</p>
                        </div>
                      </div>
                    </a>
                    <a class="hero-slider-slide" data-hero-slide href="/projects/superIntelligence/">
                      <div class="hero-slider-image" style="background-image: url('/projects/superIntelligence/featured.jpg');">
                        <div class="hero-slider-text">
                          <h4>Super Intelligence</h4>
                          <p>IoT monitoring platform</p>
                        </div>
                      </div>
                    </a>
                    <a class="hero-slider-slide" data-hero-slide href="/projects/Smart-window-system/">
                      <div class="hero-slider-image" style="background-image: url('/projects/Smart-window-system/featured.jpg');">
                        <div class="hero-slider-text">
                          <h4>Smart Window System</h4>
                          <p>Energy-aware automation</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <script>
                (function() {
                  const shell = document.getElementById('hero-featured-slider');
                  if (!shell) return;
                  const track = shell.querySelector('[data-hero-slider-track]');
                  const slides = shell.querySelectorAll('[data-hero-slide]');
                  const prev = document.querySelector('[data-hero-slider-prev]');
                  const next = document.querySelector('[data-hero-slider-next]');
                  if (!track || slides.length === 0 || !prev || !next) return;
                  let index = 0;
                  const update = () => {
                    track.style.transform = `translateX(-${index * 100}%)`;
                  };
                  const go = (delta) => {
                    index = (index + delta + slides.length) % slides.length;
                    update();
                  };
                  prev.addEventListener('click', () => go(-1));
                  next.addEventListener('click', () => go(1));
                  setInterval(() => go(1), 7000);
                })();
              </script>
            </div>
          </div>
        </div>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # Featured Projects Collection (for the slider)
  - block: markdown
    content:
      title: ''
      text: |
        <section class="hero-stats-link-section" style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 2rem 4%; box-sizing: border-box;">
          <style>
            .hero-stats-link-section { background: #f8f9ff; }
            .dark .hero-stats-link-section { background: #050712; }
            .hero-stats-link-shell {
              max-width: 1400px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
              height: 300px;
              max-height: 300px;
              overflow: hidden;
            }
            .hero-stats-link-row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 0.7rem;
              flex-wrap: nowrap;
              padding: 0.4rem 0.7rem;
              border-radius: 12px;
              border: 1px solid rgba(15,23,42,0.08);
              background: rgba(255,255,255,0.85);
              box-shadow: 0 8px 20px rgba(15,23,42,0.08);
              height: calc((300px - 0.8rem) / 3);
              max-height: calc((300px - 0.8rem) / 3);
              flex-shrink: 0;
            }
            .dark .hero-stats-link-row {
              border-color: rgba(255,255,255,0.08);
              background: rgba(9,11,18,0.78);
              box-shadow: 0 12px 30px rgba(0,0,0,0.55);
            }
            .hero-stats--single { flex: 0 0 180px; justify-content: flex-start; }
            .hero-stats--single .hero-stat-strip { justify-content: flex-start; gap: 0.5rem; }
            .hero-stats--single .hero-stat-card {
              min-width: 160px;
              padding: 0.5rem 0.5rem;
              box-shadow: 0 6px 12px rgba(15,23,42,0.12);
            }
            .hero-stat-card h4 { font-size: 1.3rem !important; margin: 0 !important; }
            .hero-stat-card p { font-size: 0.62rem !important; margin: 0 !important; }
            .hero-links-double {
              flex: 1 1 620px;
              display: grid;
              grid-template-columns: repeat(2, minmax(180px, 1fr));
              gap: 0.6rem;
              width: 100%;
            }
            @media (max-width: 960px) {
              .hero-stats-link-shell { height: auto; }
              .hero-links-double { grid-template-columns: 1fr; }
            }
            .hero-link-card {
              display: flex;
              align-items: center;
              gap: 0.6rem;
              padding: 0.4rem 0.65rem;
              border-radius: 10px;
              text-decoration: none;
              border: 1px solid rgba(15,23,42,0.06);
              background: #fff;
              color: #101427;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .hero-link-card:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(96,125,244,0.2); }
            .dark .hero-link-card { border-color: rgba(255,255,255,0.08); background: rgba(13,17,30,0.92); color: #f5f6ff; }
            .hero-link-card img {
              width: 36px;
              height: 36px;
              border-radius: 10px;
              object-fit: cover;
              border: 1px solid rgba(255,255,255,0.2);
            }
            .hero-link-text { display: flex; flex-direction: column; gap: 0.1rem; }
            .hero-link-text strong { font-size: 0.85rem; letter-spacing: 0.01em; line-height: 1.2; }
            .hero-link-text span { font-size: 0.68rem; color: #4b5164; line-height: 1.2; }
            .dark .hero-link-text span { color: #b9c2e4; }
            @media (max-width: 720px) {
              .hero-stats-link-row { flex-direction: column; align-items: stretch; }
              .hero-stats--single { width: 100%; }
            }
          </style>
          <div class="hero-stats-link-shell">
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card purple">
                    <h4>30+</h4>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
              <div class="hero-links-double">
                <a class="hero-link-card" href="https://bit.ly/hamidi-portfolio" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/filetype-pdf/6c63ff" alt="Deck icon">
                  <div class="hero-link-text">
                    <strong>Portfolio Deck</strong>
                    <span>Slide summary & wins</span>
                  </div>
                </a>
                <a class="hero-link-card" href="https://www.youtube.com/@EngHamidi" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/youtube/ff4d4d" alt="YouTube icon">
                  <div class="hero-link-text">
                    <strong>Mechatronics Channel</strong>
                    <span>Aerospace & robotics course drops</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card pink">
                    <h4>2+</h4>
                    <p>Clients</p>
                  </div>
                </div>
              </div>
              <div class="hero-links-double">
                <a class="hero-link-card" href="https://calendly.com/khaledhamidi/intro" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/googlemeet/ff80b5" alt="Meet icon">
                  <div class="hero-link-text">
                    <strong>Book Intro Call</strong>
                    <span>15 min discovery chat</span>
                  </div>
                </a>
                <a class="hero-link-card" href="https://play.google.com/store/apps/dev?id=KhaledHamidiLabs" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/googleplay/ff80b5" alt="Google Play icon">
                  <div class="hero-link-text">
                    <strong>Google Play Studio</strong>
                    <span>Useful automation & IoT apps</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card cyan">
                    <h4>3+</h4>
                    <p>Brand Partners</p>
                  </div>
                </div>
              </div>
              <div class="hero-links-double">
                <a class="hero-link-card" href="http://facebook.com/ar.robotech/" target="_blank" rel="noopener">
                  <img src="/media/robotech.jpg" alt="Robotech team">
                  <div class="hero-link-text">
                    <strong>Robotech Team</strong>
                    <span>Robotics education & community</span>
                  </div>
                </a>
                <a class="hero-link-card" href="#" target="_blank" rel="noopener">
                  <img src="/media/تميز.png" alt="Tamayuz partner">
                  <div class="hero-link-text">
                    <strong>Tamayuz Partnership</strong>
                    <span>Strategic partner in academic studies & research</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  - block: accomplishments
    content:
      title: 'Featured Projects'
      filters:
        folders:
          - projects
        tags:
          - featured
      count: 3
    design:
      spacing:
        padding: [20px, 0, 0, 0]
      view: showcase
      columns: '1'

  - block: accomplishments
    content:
      title: 'Latest Achievements'
      summary: Recent recognitions and milestones
      filters:
        folders:
          - achievements
      count: 3
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]
      view: card
      columns: '3'

  - block: collection
    content:
      title: 'Recent Blog Posts'
      filters:
        folders:
          - blog
      count: 3
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]
      view: compact

  - block: collection
    content:
      title: 'All Projects'
      text: 'Explore my complete portfolio'
      filters:
        folders:
          - projects
      count: 6
    design:
      spacing:
        padding: ['2rem', 0, '3rem', 0]
      view: compact
      columns: '2'
---