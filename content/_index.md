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
      title: ''
      count: 1
      filters:
        folders:
          - Blog
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
  - block: collection
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
      columns: '2'

  - block: collection
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
        padding: [0, 0, 0, 0]
  - block: collection
    content:
      title: my projects
      summary: some of my project is listed here.
      filters:
        folders:
          - Project
    design:
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---




