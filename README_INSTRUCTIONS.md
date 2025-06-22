# Content Contribution Guide

This project uses the **Hugo Blox** framework. Content lives under the `content/` directory. Each post has its own folder containing an `index.md` file and any media used in the post.

## Directory Overview
- `content/blog/` – Blog articles
- `content/projects/` – Project pages
- `content/academic/` – Academic papers and research
- `content/Achievements/` – Awards and certificates
- `content/freelance-work/` – Freelance projects
- `content/published-projects/` – Released projects
- `content/projects-w1/` – More project examples

## Creating a Post
1. Choose the appropriate directory above.
2. Create a new folder with a short name.
3. Add `index.md` and place any images or files in the same folder. Optional: add `featured.jpg` for the thumbnail.
4. Start `index.md` with YAML front matter:

```yaml
---
title: "Your Title"
summary: "One line summary"
date: YYYY-MM-DD
draft: false
authors:
  - admin
tags:
  - Tag1
  - Tag2
---
```
5. Write your content in Markdown under the front matter.
6. Commit the folder and push.

## Embedding Media
- **Image**: `![Alt text](image.jpg)`
- **YouTube video**: `{{< youtube VIDEO_ID >}}`
- **Local video file**: `{{< video src="my_video.mp4" controls="yes" >}}`
- **Audio**: `{{< audio src="ambient-piano.mp3" >}}`
- **Icon**: `{{< icon name="python" >}}`
- **Table from CSV**: `{{< table path="results.csv" header="true" caption="Table 1" >}}`
- **Chart**: `{{< chart data="line-chart" >}}`
- **Mermaid diagram**:
```mermaid
graph TD
A-->B
```
- **Mindmap**:
```markmap {height="200px"}
- Topic
  - Subtopic
```
- **Callout**:
```markdown
{{% callout note %}}Helpful note{{% /callout %}}
```
- **LaTeX math** (enable with `math: true` in front matter): `$E=mc^2$` or block math using `$$`.

## Quick Steps
1. Create a folder under the correct section.
2. Add `index.md` with front matter and your text.
3. Place images and files next to `index.md`.
4. Use the shortcodes above to embed media.
5. Commit your changes and deploy.

## Arabic Content and HTML
You can mix Markdown and HTML directly. To display Arabic paragraphs from right to left, wrap them in a `div` with `dir="rtl"`:

```html
<div dir="rtl" style="text-align: justify;">
مرحبا بكم في المدونة.
</div>
```

Any standard HTML tag, such as an `<iframe>` for Facebook posts, can be inserted the same way.

### Writing Style
- Keep sentences short and clear.
- Use bullet lists for important points.
- Place images near the text that references them.
- For Arabic sections use the RTL `div` as shown above.

## More info
1. the protifiolo is for Khaled HAMIDI, He is Mechatroncis and  Aerospace Engineer also software engineer.
2. authors: always is admin
3. tags list:
     - achievement
     - education
     - technology
     - community
     - opinion
     - politics
     - open-source
     - software
    - business
     - iot
     - you can add other if needs.
4. the Readme files is an examples.
5. Write the code in txt box to easy copy it
