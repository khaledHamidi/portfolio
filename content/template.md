---
title: "Template Title"
summary: "A brief summary of the content."
date: 2025-12-05
draft: true
authors:
  - admin
tags:
  - tag1
  - tag2
---

This is a template file to demonstrate how to create new content with various elements.

## Images

### Image from the `assets/media` folder
To display an image from the `assets/media` folder, use the following syntax:

`{{< figure src="media/path/to/your/image.jpg" title="Image from assets/media" >}}`

**Example:**
`{{< figure src="media/images/filling-machine-electro-pneumatic-system.jpg" title="Filling Machine" >}}`

### Image from the `static` folder
To display an image from the `static` folder, you can use a relative path:

`![Image from static](path/to/your/image.jpg)`

**Example:**
If you have an image at `static/img/my-image.jpg`, you would use:
`![My Image](/img/my-image.jpg)`

### Image from the same folder
To display an image that is in the same folder as your markdown file, you can use its filename directly:

`![Image from same folder](image-name.jpg)`

**Example:**
If you have an image named `local-image.jpg` in the same folder as this `index.md`, you would use:
`![Local Image](local-image.jpg)`

## YouTube Video

To embed a YouTube video, use the `youtube` shortcode with the video's ID:

`{{< youtube VIDEO_ID >}}`

**Example:**
For the video at `https://www.youtube.com/watch?v=ukwvoZGGDMo`, the ID is `ukwvoZGGDMo`. You would embed it like this:

`{{< youtube ukwvoZGGDMo >}}`
