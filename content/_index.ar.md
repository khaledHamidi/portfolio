---
title: 'الرئيسية'
type: landing
sections:
  - block: markdown
    content:
      title: ''
      text: |
        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%); padding: 3rem 5%; box-sizing: border-box;"><div style="max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; align-items: start; direction: rtl;"><div style="background: linear-gradient(135deg, #f5f7fa 0%, #e8eef3 100%); padding: 2.5rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); min-height: 450px;"><h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; color: #333; text-align: right;">المشاريع المميزة</h3><p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem; text-align: right;">عرض لأهم وأبرز أعمالي</p><div id="featured-slider" style="text-align: center; color: #666;"><p style="font-size: 1rem;">جاري تحميل المشاريع المميزة...</p></div></div><div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.08);"><div style="text-align: center; margin-bottom: 1.5rem;"><img src="./authors/admin/avatar.jpg" alt="خالد حميدي" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid #667eea;"><h2 style="margin: 0.5rem 0; font-size: 1.5rem; color: #333;">خالد حميدي</h2><p style="color: #666; margin: 0.5rem 0;">مهندس ميكاترونيكس وطيران</p><p style="color: #888; font-size: 0.9rem;">مطور أنظمة ذكية</p></div><div style="display: flex; gap: 0.8rem; margin: 1.5rem 0; justify-content: center;"><div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1rem 0.8rem; border-radius: 10px; text-align: center; color: white; flex: 1; box-shadow: 0 4px 10px rgba(102,126,234,0.3);"><h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">+15</h4><p style="margin: 0.2rem 0 0 0; font-size: 0.7rem;">مشروع</p></div><div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 1rem 0.8rem; border-radius: 10px; text-align: center; color: white; flex: 1; box-shadow: 0 4px 10px rgba(240,147,251,0.3);"><h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">+2</h4><p style="margin: 0.2rem 0 0 0; font-size: 0.7rem;">عميل</p></div><div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 1rem 0.8rem; border-radius: 10px; text-align: center; color: white; flex: 1; box-shadow: 0 4px 10px rgba(79,172,254,0.3);"><h4 style="font-size: 1.8rem; margin: 0; font-weight: bold;">+3</h4><p style="margin: 0.2rem 0 0 0; font-size: 0.7rem;">مفتوح المصدر</p></div></div><div style="text-align: center; margin-top: 1.5rem;"><a href="mailto:hamidi@engineer.com" style="display: inline-block; margin: 0 0.5rem; padding: 0.5rem 1rem; background: #667eea; color: white; text-decoration: none; border-radius: 5px; font-size: 0.9rem;">Email</a><a href="https://github.com/khaledHamidi" style="display: inline-block; margin: 0 0.5rem; padding: 0.5rem 1rem; background: #333; color: white; text-decoration: none; border-radius: 5px; font-size: 0.9rem;">GitHub</a><a href="https://linkedin.com/in/enghamidi" style="display: inline-block; margin: 0 0.5rem; padding: 0.5rem 1rem; background: #0077b5; color: white; text-decoration: none; border-radius: 5px; font-size: 0.9rem;">LinkedIn</a></div></div></div></div>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # مجموعة المشاريع المميزة (للسلايدر)
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