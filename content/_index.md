---
title: 'Home'
type: landing
sections:
  - block: resume-biography
    content:
      username: admin
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: 'text-align: justify; font-size: 0.8em;'
  - block: collection
    content:
      title: ''
      count: 1
      filters:
        folders:
          - Blog
    design:
      spacing:
        padding: ['1rem', 0, '0rem', 0]

  - block: accomplishments
    content:
      title: 'Achievements'
      summary: Recognized contributions and accomplishments throughout my career
      filters:
        folders:
          - achievements
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: card

  - block: accomplishments
    content:
      title: Academic
      subtitle: ''
      summary: Recently published scientific articles
      filters:
        folders:
          - academic
      count: 2
    design:
      spacing:
        padding: [3rem, 0, 0, 0]

  - block: accomplishments
    content:
      title: ' Latest Posts'
      filters:
        folders:
          - blog
    design:
      spacing:
        padding: [3rem, 0, 0, 0]
      view: card

  - block: collection
    content:
      title: '⭐ Featured Projects'
      text: My most impactful and important work
      filters:
        folders:
          - projects
        tags:
          - featured
      count: 3
    design:
      spacing:
        padding: ['3rem', 0, '1rem', 0]
      view: card
      columns: '2'

  - block: collection
    content:
      title: 'Recent Projects'
      text: Latest work and updates
      filters:
        folders:
          - projects
      count: 6
    design:
      spacing:
        padding: ['1rem', 0, '3rem', 0]
      view: compact
      columns: '2'
---