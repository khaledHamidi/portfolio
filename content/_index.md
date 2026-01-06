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
          /* Mobile-first: 1 column on phone, 3 columns on desktop */
          .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; gap: 1rem !important; }
          @media (min-width: 768px) {
            .grid-cols-1 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 1.2rem !important; }
            .md\:grid-cols-2 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
            .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          }
          /* Compact card sizing - applies to ALL cards in grid */
          .grid > a {
            min-height: 200px !important;
            max-height: 380px !important;
          }
          .grid > a > div:first-of-type {
            height: 300px !important;
            max-height: 300px !important;
          }
          .grid > a > div:last-of-type {
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
          
          /* Mobile: Add padding to blog/project sections */
          @media (max-width: 767px) {
            .container.max-w-\[65ch\] { padding-left: 1rem !important; padding-right: 1rem !important; }
            /* Make blog/project images 1:1 ratio on mobile */
            .md\:flex > div:first-child img {
              width: 100% !important;
              height: auto !important;
              aspect-ratio: 1 / 1 !important;
              object-fit: cover !important;
            }
            .md\:w-48 { width: 100% !important; max-width: 100% !important; }
            .h-48 { height: auto !important; }
            /* Hide Last posts section on mobile */
            #section-collection:first-of-type { display: none !important; }
          }
        </style>
        <div class="not-prose">
        <section>
          <style>
            /* .hero-stats-link-section { background: #f8f9ff; } */
            /* .dark .hero-stats-link-section { background: #050712; } */
            .prose, .max-w-prose, .lg\:prose-xl {
              max-width: none !important;
            }
            .hero-stats-link-shell {
              max-width: 1300px !important;
              min-width: 1000px !important
              width: 100% !important;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              gap: 1.25rem;
              padding-inline: clamp(1rem, 3vw, 2.5rem);
            }
            .hero-stats-link-row {
              display: grid;
              grid-template-columns: minmax(140px, 0.5fr) repeat(2, minmax(0, 1.2fr));
              gap: 1.25rem;
              align-items: stretch;
              width: 100%;
            }
            .dark .hero-stats-link-row {
            }
            .hero-stats--single {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .hero-stats--single .hero-stat-strip { justify-content: center; gap: 0.5rem; }
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
            .hero-stat-strip {
              display: flex;
              gap: 0.6rem;
              width: 100%;
              justify-content: center;
              flex-wrap: nowrap;
            }
            .hero-link-card {
              display: flex;
              align-items: flex-start;
              gap: 0.85rem;
              padding: 0.75rem 0.9rem;
              border-radius: 10px;
              text-decoration: none;
              border: 1px solid rgba(15,23,42,0.06);
              background: #fff;
              color: #101427;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
              flex: 1 1 0;
              min-width: 0.8rem;
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
            .hero-link-text { display: flex; flex-direction: column; gap: 0.2rem; }
            .hero-link-text strong { font-size: 0.92rem; letter-spacing: 0.01em; line-height: 1.3; }
            .hero-link-text span { font-size: 0.78rem; color: #4b5164; line-height: 1.4; }
            .dark .hero-link-text span { color: #b9c2e4; }
            .hero-stats-link-row > .hero-link-card {
              height: 100%;
            }
            @media (max-width: 960px) {
              .hero-stats-link-row { grid-template-columns: 1fr; }
            }
            @media (max-width: 720px) {
              .hero-stats--single { width: 100%; }
            }
            /* Center text inside hero-stat-card for English only */
            .hero-stat-card h4,
            .hero-stat-card p {
              text-align: center !important;
              margin-left: auto !important;
              margin-right: auto !important;
              float: none !important;
              display: block !important;
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
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card pink">
                    <h4>40+</h4>
                    <p>Clients</p>
                  </div>
                </div>
              </div>
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
            <div class="hero-stats-link-row">
              <div class="hero-stats hero-stats--single">
                <div class="hero-stat-strip">
                  <div class="hero-stat-card cyan">
                    <h4>three</h4>
                    <p>Brand Partners</p>
                  </div>
                </div>
              </div>
              <a class="hero-link-card" href="http://facebook.com/ar.robotech/" target="_blank" rel="noopener">
                <img src="/media/images/robotech.jpg" alt="Robotech team">
                <div class="hero-link-text">
                  <strong>Founder of Robotech Team</strong>
                  <span>Robotics education & community</span>
                </div>
              </a>
              <a class="hero-link-card" href="#" target="_blank" rel="noopener">
                <img src="/media/images/تميز.png" alt="Tamayuz partner">
                <div class="hero-link-text">
                  <strong>Tamayoz Academy Director</strong>
                  <span>Strategic partner in academic studies & research</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        </div>
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
        padding: [20px, 0, 100px, 0]
      view: showcase
      columns: '1'

  - block: accomplishments
    content:
      title: 'Achievement'
      filters:
        folders:
          - achievements
      count: 3
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: showcase
      columns: '1'

  - block: collection
    id: last-posts-section
    content:
      title: 'Last blogs'
      filters:
        folders:
          - posts
      count: 2
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: card
      css_class: hide-on-mobile

  - block: collection
    content:
      title: 'My projects'
      filters:
        folders:
          - projects
      count: 3
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: card
      columns: '2'

---