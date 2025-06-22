---
title: QistasLinks
summary: الحل الأمثل للمشاريع التي تعتمد على الاتصالات التسلسلية
date: 2022-04-02
authors:
  - admin
tags:
  - مفتوح المصدر
  - برمجيات
  - المتحكمات الدقيقة
image:
  caption: 'مصدر الصورة: [**Unsplash**](https://github.com/khaledHamidi/Logic-Element-Explorer/blob/main/image.jpg)'
---

# QistasLinks
**الحل الأمثل للمشاريع التي تعتمد على الاتصالات التسلسلية (Serial Communication)**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.8248290.svg)](https://doi.org/10.5281/zenodo.8248290)  
[![Author: Khaled HAMIDI](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/0009-0004-2962-0833) [Khaled HAMIDI](https://orcid.org/0009-0004-2962-0833)

مكتبة QistasLinks بلغة C#، تسهّل التواصل التسلسلي عبر منفذ RS232 لأي مشروع يحتاج اتصالاً بالمتحكمات الدقيقة. توفّر هذه المكتبة وسائل سهلة الاستخدام وخصائص قوية تجعل من عملية التبادل البياني بين الحاسوب والمتحكمات دقيقة وفعالة، مما يجعلها خيارًا مثاليًا لمشاريع .NET التي تعتمد على الاتصال التسلسلي.

## من المستفيد من QistasLinks؟

صُمّمت مكتبة QistasLinks للمطورين والأفراد الذين يعملون على مشاريع تعتمد على الاتصال التسلسلي مع المتحكمات الدقيقة، مثل Arduino وPIC وAVR، أو الأجهزة الإلكترونية التي تحتاج لإرسال واستقبال البيانات.

## أبرز الميزات

- **الاتصال التسلسلي:** تمكّن المكتبة من إجراء عمليات القراءة والكتابة بسلاسة عبر منافذ RS232، مما يوفر قناة اتصال موثوقة ومرنة.

- **نمط تبادل البيانات:** توفّر المكتبة نمطًا مرنًا لنقل البيانات يسهل من التفاعل بين الحواسيب والمتحكمات الدقيقة.

- **دعم صيغة الأوامر:** يمكن استخدام صيغة مخصصة للأوامر لتوجيه الأوامر للأجهزة المتصلة بشكل دقيق ومنظّم.

### دعم أنماط بيانات مخصصة

توفر QistasLinks القدرة على تحديد نمط مخصص لتبادل البيانات مثل: `<data...>` أو `{data...}` أو `data...
`. هذه الأنماط يمكن تخصيصها حسب حاجة المشروع.

### تسلسل وفك تسلسل الأوامر

توفر المكتبة نظامًا لتحليل الأوامر بشكل يسمح بفهم الأمر ومكوناته مثل:
`"#opration# #key#:#value#"`  
عند استقبال البيانات بهذا الشكل، يتم تحويلها إلى كائن ديناميكي يمكن التعامل معه برمجيًا.

مثلاً:
```text
SET speed:120
```
يترجم إلى:  
`obj.operation = "SET"`  
`obj.key = "speed"`  
`obj.value = 120`

## التثبيت

### تثبيت يدوي:

1. حمّل ملف `QistasLinks.Dll` من مجلد التنزيلات.
2. أضف المكتبة إلى مشروعك في C#.
3. تأكد أن المشروع يستخدم إصدار .NET المناسب.
4. أعد بناء المشروع لتأكيد إضافة المكتبة بنجاح.

### تثبيت عبر NuGet:

- باستخدام CLI:
```bash
dotnet add package Qistas.QistasLinks --version 1.0.0
```
- عبر Visual Studio:
```powershell
NuGet\Install-Package Qistas.QistasLinks -Version 1.0.0
```

[![Download QistasLinks-Serial-Communication-Library](https://a.fsdn.com/con/app/sf-download-button)](https://sourceforge.net/projects/qistaslinks-serial-library/files/latest/download)  
أو يمكن تحميلها من SourceForge.

## أمثلة على الاستخدام

يمكنك الاطلاع على أمثلة عملية من خلال مجلد [Documentation](Documentation/)  
أو عبر هذا المثال:  
[أمثلة توضيحية](Documents/01%20Example%20-%20Basic%20example.md)

## ملفات المصدر المفتوح

المشروع متاح عبر GitHub:  
[Qistas > QistasLinks](https://github.com/khaledHamidi/Qistas/tree/master/QistasLinks)

## الترخيص

تم ترخيص QistasLinks بموجب رخصة [MIT](https://opensource.org/licenses/MIT).

## الدعم

لطرح أي استفسارات أو مشاكل، يرجى فتح بلاغ (Issue) على صفحة GitHub الخاصة بالمشروع.

## الشكر والتقدير

- QistasLinks هو جزء من مشروع Qistas الهادف لتوفير أدوات ومكتبات تسهّل التكامل مع المتحكمات الدقيقة.
- شكر خاص لمجتمع البرمجيات المفتوحة المصدر على دعمه ومساهماته.

## للتواصل

للاستفسارات والمعلومات الإضافية:  
[eng.Hamidi@yahoo.com](mailto:eng.Hamidi@yahoo.com)

شكرًا لاستخدامكم QistasLinks!