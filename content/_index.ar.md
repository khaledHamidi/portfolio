---
title: 'الرئيسية'
type: landing
sections:
  # القسم A: البطاقة الشخصية
  - block: resume-biography
    content:
      username: admin
    design:
      spacing:
        padding: ['3rem', 0, '3rem', 0]
      biography:
        style: 'text-align: justify; font-size: 0.9em;'

  # القسم B: بطاقات الإحصائيات (3 بطاقات)
  - block: markdown
    content:
      title: ''
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 2rem 0;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">+15</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">مشروع مكتمل</p>
          </div>
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">+2</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">مشاريع العملاء</p>
          </div>
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 2rem; border-radius: 15px; text-align: center; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="font-size: 3rem; margin: 0; font-weight: bold;">+3</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem;">مشاريع مفتوحة المصدر</p>
          </div>
        </div>
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]

  # القسم C: المشاريع المميزة (عرض متحرك)
  - block: collection
    content:
      title: '⭐ المشاريع المميزة'
      subtitle: 'عرض لأهم وأبرز أعمالي'
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

  # القسم D: الأقسام الأخرى
  - block: accomplishments
    content:
      title: 'أحدث الإنجازات'
      summary: آخر التقديرات والإنجازات
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
      title: 'أحدث المقالات'
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
      title: 'جميع المشاريع'
      text: 'استكشف مجموعة أعمالي الكاملة'
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