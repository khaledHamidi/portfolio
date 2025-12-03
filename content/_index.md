---
title: 'Home'
type: landing
sections:
  # Top Section: A (Bio) + B (Stats) + C (Featured Slider)
  - block: markdown
    content:
      title: ''
      text: |
        <div style="display: grid; grid-template-columns: 1fr 200px 2fr; gap: 2rem; margin: 3rem 0; align-items: start;">
          
          <!-- Section A: Personal Info -->
          <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08);">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <img src="/authors/admin/avatar.jpg" alt="Khaled HAMIDI" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #667eea;">
              <h2 style="margin: 0.5rem 0; font-size: 1.5rem; color: #333;">Khaled HAMIDI</h2>
              <p style="color: #666; margin: 0.5rem 0;">Mechatronics & Aerospace Engineer</p>
              <p style="color: #888; font-size: 0.9rem;">AI & Systems Developer</p>
            </div>
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="mailto:hamidi@engineer.com" style="margin: 0 0.5rem; color: #667eea;">✉️</a>
              <a href="https://github.com/khaledHamidi" style="margin: 0 0.5rem; color: #667eea;">💻</a>
              <a href="https://linkedin.com/in/enghamidi" style="margin: 0 0.5rem; color: #667eea;">💼</a>
            </div>
          </div>
          
          <!-- Section B: Statistics (Vertical) -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.5rem; border-radius: 12px; text-align: center; color: white; box-shadow: 0 8px 20px rgba(102,126,234,0.4);">
              <h3 style="font-size: 2.5rem; margin: 0; font-weight: bold;">15+</h3>
              <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">Projects</p>
            </div>
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 1.5rem; border-radius: 12px; text-align: center; color: white; box-shadow: 0 8px 20px rgba(240,147,251,0.4);">
              <h3 style="font-size: 2.5rem; margin: 0; font-weight: bold;">2+</h3>
              <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">Clients</p>
            </div>
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 1.5rem; border-radius: 12px; text-align: center; color: white; box-shadow: 0 8px 20px rgba(79,172,254,0.4);">
              <h3 style="font-size: 2.5rem; margin: 0; font-weight: bold;">3+</h3>
              <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">Open Source</p>
            </div>
          </div>
          
          <!-- Section C: Featured Projects Slider -->
          <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); min-height: 400px;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.3rem; color: #333;">⭐ Featured Projects</h3>
            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1.5rem;">Showcasing my most impactful work</p>
            <!-- Slider placeholder - will be filled by Hugo -->
            <div id="featured-slider" style="text-align: center; color: #666;">
              <p>Loading featured projects...</p>
            </div>
          </div>
          
        </div>
    design:
      spacing:
        padding: ['3rem', 0, '2rem', 0]

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