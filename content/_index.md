---
title: 'Home'
type: landing
sections:
  - block: hero_slider
    content:
      title: ''
      filters:
        folders:
          - hero
  - block: markdown
    content:
      title: ''
      text: |
        <style>
          /* Force 3-column grid for accomplishments */
          .grid-cols-1 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 1.2rem !important; }
          @media (min-width: 768px) {
            .md\:grid-cols-2 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
            .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          }
          /* Compact card sizing */
          .grid > a[href*="/projects/"],
          .grid > a[href*="/achievements/"] {
            min-height: 100px !important;
            max-height: 280px !important;
          }
          .grid > a[href*="/projects/"] > div:first-of-type,
          .grid > a[href*="/achievements/"] > div:first-of-type {
            height: 150px !important;
            max-height: 150px !important;
          }
          .grid > a[href*="/projects/"] > div:last-of-type,
          .grid > a[href*="/achievements/"] > div:last-of-type {
            padding: 0.65rem !important;
          }
          /* Single-line titles with ellipsis */
          .grid h3 {
            font-size: 0.78rem !important;
            line-height: 1.3 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
          }
          /* Smaller section headings */
          .text-center h2 {
            font-size: 1.15rem !important;
            margin-bottom: 1rem !important;
          }
          .mb-10 { margin-bottom: 1rem !important; }
          .mb-6 { margin-bottom: 0.8rem !important; }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
  - block: accomplishments
    content:
      title: 'Featured'
      filters:
        tags:
          - Featured
          - featured
      count: 3
    design:
      spacing:
        padding: [20px, 0, 200px, 0]
      view: showcase
      columns: '1'

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
            .hero-stat-card { 
              flex: 1;
              min-width: 90px;
              padding: 1rem 0.7rem;
              border-radius: 14px;
              text-align: center;
              color: #fff;
              box-shadow: 0 12px 25px rgba(15,23,42,0.25);
            }
            .hero-stat-card h4 { font-size: 1.3rem !important; margin: 0 !important; font-weight: 700; }
            .hero-stat-card p { font-size: 0.62rem !important; margin: 0 !important; letter-spacing: 0.5px; text-transform: uppercase; }
            .hero-stat-card.purple { background: linear-gradient(135deg, #6c63ff 0%, #7f6bda 100%); }
            .hero-stat-card.pink { background: linear-gradient(135deg, #ff80b5 0%, #ff6b6b 100%); }
            .hero-stat-card.cyan { background: linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%); }
            .hero-stat-strip { display: flex; gap: 0.6rem; width: 100%; justify-content: center; flex-wrap: nowrap; min-width: 240px; }
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
              height: 80px !important;
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
                  <img src="https://cdn.simpleicons.org/googlechrome/6c63ff" alt="Chrome extensions icon">
                  <div class="hero-link-text">
                    <strong>Chrome extensions +3</strong>
                    <span>Ad blocker, youtube short + unrelated search resault redular. starter page ...</span>
                  </div>
                </a>
                <a class="hero-link-card" href="https://www.youtube.com/@EngHamidi" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/youtube/ff4d4d" alt="YouTube icon">
                  <div class="hero-link-text">
                    <strong>my youtube channel</strong>
                    <span>Aerospace & robotics course drops (+30 videos.)</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card pink">
                    <h4>40+</h4>
                    <p>Clients</p>
                  </div>
                </div>
              </div>
              <div class="hero-links-double">
                <a class="hero-link-card" href="https://calendly.com/khaledhamidi" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/googlemeet/ff80b5" alt="Meet icon">
                  <div class="hero-link-text">
                    <strong>Book Intro Call</strong>
                    <span>15 min discovery chat</span>
                  </div>
                </a>
                <a class="hero-link-card" href="https://play.google.com/store/apps/dev?id=KhaledHamidiLabs" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/googleplay/ff80b5" alt="Google Play icon">
                  <div class="hero-link-text">
                    <strong>Google Play store page</strong>
                    <span>my published usful apps. +3 apps</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card cyan">
                    <h4>three</h4>
                    <p>Brand Partners</p>
                  </div>
                </div>
              </div>
              <div class="hero-links-double">
                <a class="hero-link-card" href="http://facebook.com/ar.robotech/" target="_blank" rel="noopener">
                  <img src="/images/robotech.jpg" alt="Robotech team">
                  <div class="hero-link-text">
                    <strong>مؤسس فريق روبوتك" 2021"</strong>
                    <span>Robotics education & community</span>
                  </div>
                </a>
                <a class="hero-link-card" href="#" target="_blank" rel="noopener">
                  <img src="/images/تميز.png" alt="Tamayuz partner">
                  <div class="hero-link-text">
                    <strong>مدير أكادمية تميز</strong>
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
      title: 'Achievement'
      filters:
        folders:
          - achievements
      count: 3
      view: showcase
      columns: '1'

  - block: markdown
    content:
      title: ''
      text: "."
    design:
      spacing:
        padding: [0, 0, 0, 0]


  - block: collection
    content:
      title: 'Last blogs'
      filters:
        folders:
          - posts
      count: 3
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]
      view: card

  - block: collection
    content:
      title: 'My projects'
      filters:
        folders:
          - projects
      count: 6
    design:
      spacing:
        padding: ['0rem', 0, '0rem', 0]
      view: card
      columns: '2'

---