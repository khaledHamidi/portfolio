---
title: 'Home'
date: 2023-10-24
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
      summary: The work that I have done has received appreciation
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
      summary: Latest scientific articles published
      filters:
        folders:
          - academic
      count: 2
    design:
      spacing:
        padding: [3rem, 0, 0, 0]

  - block: accomplishments
    content:
      title: 'آخر المنشورات'
      filters:
        folders:
          - blog
    design:
      spacing:
        padding: [3rem, 0, 0, 0]
      view: card

  - block: collection
    content:
      title: projects
      summary: some of my project is listed here.
      filters:
        folders:
          - projects
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
---