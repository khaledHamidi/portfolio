---
title: 'العربية'
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
      title: 'آخر الإنجازات'
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
      title: الأعمال الأكادمية
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
      title: 'أحدث ما نُشر'
      filters:
        folders:
          - blog.ar
    design:
      spacing:
        padding: [3rem, 0, 0, 0]
      view: card

  - block: collection
    content:
      title: المشاريع
      summary: آخر مشاريع التي تم العمل عليها.
      filters:
        folders:
          - projects
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
---