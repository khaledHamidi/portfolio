---
title: 'Home'
type: landing
sections:
  # Section A: Hero/Biography
  - block: resume-biography
    content:
      username: admin
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
      biography:
        style: 'text-align: justify; font-size: 0.9em;'

  # Section B: Statistics Cards (3 Cards)
  - block: markdown
    content:
      title: ''
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 2rem 0;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">15+</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">Projects Completed</p>
          </div>
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">2+</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">Client Projects</p>
          </div>
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">3+</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">Open Source</p>
          </div>
        </div>
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]

  # Section C: Featured Projects (Slider/Carousel)
  - block: collection
    content:
      title: '⭐ Featured Projects'
      subtitle: 'Showcasing my most impactful work'
      filters:
        folders:
          - projects
        tags:
          - featured
      count: 10
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
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