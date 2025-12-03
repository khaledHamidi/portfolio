---
title: 'Home'
type: landing
sections:
  - block: markdown
    content:
      title: ''
      text: |
        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: linear-gradient(to bottom, #f7f8fc 0%, #ffffff 100%); padding: 2.5rem 4%; box-sizing: border-box;">
          <div style="max-width: 1400px; margin: 0 auto; display: flex; gap: 1.5rem; align-items: stretch; justify-content: space-between; flex-wrap: wrap;">
            <div style="flex: 1 1 320px; background: #fff; padding: 1.8rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08);">
              <div style="text-align: center; margin-bottom: 1.2rem;">
                <img src="/authors/admin/avatar.jpg" alt="Khaled HAMIDI" style="width: 120px; height: 120px; border-radius: 60px; object-fit: cover; margin-bottom: 0.9rem; border: 4px solid #667eea;">
                <h2 style="margin: 0.4rem 0; font-size: 1.6rem; color: #222;">Khaled HAMIDI</h2>
                <p style="color: #555; margin: 0.3rem 0; font-size: 0.95rem;">Lead Mechatronics & Aerospace Engineer</p>
                <p style="color: #777; margin: 0; font-size: 0.9rem;">Intelligent Systems Architect</p>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555;"><span>Location</span><strong>Doha · Remote</strong></div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555;"><span>Experience</span><strong>7+ years</strong></div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555;"><span>Focus</span><strong>Robotics · AI · IoT</strong></div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #555;"><span>Availability</span><strong>Consulting & R&D</strong></div>
              </div>
              <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                <a href="mailto:hamidi@engineer.com" style="flex: 1 1 100px; text-align: center; padding: 0.55rem 0.8rem; background: #667eea; color: #fff; text-decoration: none; border-radius: 6px; font-size: 0.9rem;">Email</a>
                <a href="https://github.com/khaledHamidi" style="flex: 1 1 100px; text-align: center; padding: 0.55rem 0.8rem; background: #222; color: #fff; text-decoration: none; border-radius: 6px; font-size: 0.9rem;">GitHub</a>
                <a href="https://linkedin.com/in/enghamidi" style="flex: 1 1 100px; text-align: center; padding: 0.55rem 0.8rem; background: #0066b2; color: #fff; text-decoration: none; border-radius: 6px; font-size: 0.9rem;">LinkedIn</a>
              </div>
            </div>
            <div style="flex: 1 1 240px; display: flex; align-items: center; justify-content: center;">
              <div style="display: flex; gap: 0.7rem; width: 100%; justify-content: center; flex-wrap: nowrap;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.1rem 0.7rem; border-radius: 12px; text-align: center; color: #fff; flex: 1; min-width: 90px; box-shadow: 0 4px 10px rgba(102,126,234,0.3);">
                  <h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">15+</h4>
                  <p style="margin: 0.15rem 0 0 0; font-size: 0.72rem; letter-spacing: 0.5px;">Projects</p>
                </div>
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 1.1rem 0.7rem; border-radius: 12px; text-align: center; color: #fff; flex: 1; min-width: 90px; box-shadow: 0 4px 10px rgba(240,147,251,0.3);">
                  <h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">2+</h4>
                  <p style="margin: 0.15rem 0 0 0; font-size: 0.72rem; letter-spacing: 0.5px;">Clients</p>
                </div>
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 1.1rem 0.7rem; border-radius: 12px; text-align: center; color: #fff; flex: 1; min-width: 90px; box-shadow: 0 4px 10px rgba(79,172,254,0.3);">
                  <h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">3+</h4>
                  <p style="margin: 0.15rem 0 0 0; font-size: 0.72rem; letter-spacing: 0.5px;">Open Source</p>
                </div>
              </div>
            </div>
            <div style="flex: 1.4 1 360px; background: linear-gradient(135deg, #f5f7fa 0%, #e8eef3 100%); padding: 2.2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); min-height: 420px;">
              <h3 style="margin: 0 0 0.4rem 0; font-size: 1.5rem; color: #333;">Featured Projects</h3>
              <p style="color: #666; font-size: 0.93rem; margin-bottom: 1.8rem;">Showcasing flagship client and research work.</p>
              <div id="featured-slider" style="text-align: center; color: #666;">
                <p style="font-size: 1rem;">Loading featured projects...</p>
              </div>
            </div>
          </div>
        </div>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # Featured Projects Collection (for the slider)
  - block: collection
    content:
      title: ''
      filters:
        folders:
          - projects
        tags:
          - featured
      count: 5
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: showcase
      columns: '1'

  # Section D: Other Sections
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