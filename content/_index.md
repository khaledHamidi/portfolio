---
title: 'Home'
date: 2023-10-24
type: landing
sections:
  - block: resume-biography
    content:
      # The user's folder name in content/authors/
      username: admin
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: 'text-align: justify; font-size: 0.8em;'
  - block: collection
    content:
      title: 'Achievements'
      filters:
        folders:
          - achievements
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: card
  - block: collection
    content:
      title: 'Academic Published Papers'
      filters:
        folders:
          - academic
      count: 2
    design:
      spacing:
        padding: [0, 0, 0, 0]
      layout:
        style: horizontal

  - block: collection
    content:
      filters:
        folders:
          - blog
    design:
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---




