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
    title: lest my prosts
    content:
      filters:
        folders:
          - Blog
    design:
      spacing:
        padding: ['1rem', 0, '1rem', 0]
    count: 1
  - block: collection
    content:
      title: 'Achievements'
      text: The work that I have done has received appreciation
      filters:
        folders:
          - achievements
    design:
      spacing:
        padding: [0, 0, 0, 0]
      view: card
  - block: collection
    content:
      title: Academic
      subtitle: ''
      text: Latest scientific articles published
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
    title: my projects
     text: some of my project is listed here.
    content:
      filters:
        folders:
          - projects
    design:
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---




