---
title: Tags & Categories
summary: Explore content organized by topics and categories
type: landing

sections:
  - block: markdown
    content:
      title: ''
      text: |
        <div class="tags-landing" style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 1.2rem 0.8rem;">
          <style>
            .tags-landing h1 { font-size: 2rem; margin-bottom: 0.35rem; color: #121531; font-weight: 700; }
            .tags-landing p.lead { font-size: 0.95rem; color: #53586f; margin: 0; }
            .dark .tags-landing h1 { color: #f5f6ff; }
            .dark .tags-landing p.lead { color: #c7ccdf; }
            .tags-landing .tag-card {
              position: relative;
              padding: 0.85rem 1rem;
              border-radius: 14px;
              background: linear-gradient(120deg, rgba(255,255,255,0.97), rgba(246,247,252,0.92));
              border: 1px solid rgba(126,139,177,0.28);
              box-shadow: 0 10px 30px rgba(15,23,42,0.08);
              overflow: hidden;
              white-space: nowrap;
            }
            .dark .tags-landing .tag-card {
              background: linear-gradient(120deg, rgba(18,21,34,0.96), rgba(13,16,28,0.9));
              border-color: rgba(148,163,184,0.35);
              box-shadow: 0 18px 45px rgba(2,6,23,0.75);
            }
            .tags-landing .tag-card__label {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              font-size: 1rem;
              font-weight: 600;
              color: #1a1f35;
            }
            .dark .tags-landing .tag-card__label { color: #f6f7fb; }
            .tags-landing .tag-dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: var(--accent, #4f46e5);
              flex-shrink: 0;
            }
            .tags-landing .tag-count { font-size: 0.82rem; color: #5d6380; }
            .dark .tags-landing .tag-count { color: #c4c9de; }
            .tags-landing .tag-chip, .tags-landing .tag-tile {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.55rem 1rem;
              border-radius: 999px;
              font-size: 0.9rem;
              font-weight: 600;
              white-space: nowrap;
              background: rgba(245,247,251,0.9);
              border: 1px solid rgba(205,211,224,0.9);
              color: #1f3c88;
            }
            .dark .tags-landing .tag-chip, .dark .tags-landing .tag-tile {
              background: rgba(23,27,43,0.95);
              border-color: rgba(99,110,138,0.6);
              color: #d7dcf5;
            }
            .tags-landing .tag-chip span,
            .tags-landing .tag-tile span { font-size: 0.78rem; color: #6b7294; }
            .dark .tags-landing .tag-chip span,
            .dark .tags-landing .tag-tile span { color: #afb6d5; }
            .tags-landing .industry-card {
              background: rgba(251,251,253,0.95);
              border: 1px solid #d9dee8;
              border-radius: 12px;
              padding: 0.75rem 0.95rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 0.95rem;
              white-space: nowrap;
            }
            .dark .tags-landing .industry-card {
              background: rgba(18,22,35,0.98);
              border-color: rgba(96,105,128,0.6);
              color: #f3f4fb;
            }
            .tags-landing .industry-card span.count { font-size: 0.85rem; color: #6b6f82; }
            .dark .tags-landing .industry-card span.count { color: #c6cbde; }
          </style>
          <div style="text-align: center; margin-bottom: 1.5rem;">
            <h1>Capability & Focus Map</h1>
            <p class="lead">Snapshot of the disciplines, tech stacks, and industries where I deliver outcomes.</p>
          </div>

          <!-- Project Type Tags -->
          <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem; color: #1f3c88; margin-bottom: 0.9rem; border-bottom: 2px solid #d8deeb; padding-bottom: 0.35rem;">
              Project Type
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.6rem;">
              <a href="/tags/featured/" style="text-decoration: none;">
                <div class="tag-card" style="--accent:#4f46e5;">
                  <div class="tag-card__label">
                    <span class="tag-dot"></span>
                    <span>Featured</span>
                    <span class="tag-count">({{< tagcount name="featured" >}})</span>
                  </div>
                </div>
              </a>
              <a href="/tags/client-work/" style="text-decoration: none;">
                <div class="tag-card" style="--accent:#2a9d8f;">
                  <div class="tag-card__label">
                    <span class="tag-dot"></span>
                    <span>Client Work</span>
                    <span class="tag-count">({{< tagcount name="client-work" >}})</span>
                  </div>
                </div>
              </a>
              <a href="/tags/open-source/" style="text-decoration: none;">
                <div class="tag-card" style="--accent:#3d5a80;">
                  <div class="tag-card__label">
                    <span class="tag-dot"></span>
                    <span>Open Source</span>
                    <span class="tag-count">({{< tagcount name="open-source" >}})</span>
                  </div>
                </div>
              </a>
              <a href="/tags/research/" style="text-decoration: none;">
                <div class="tag-card" style="--accent:#5c677d;">
                  <div class="tag-card__label">
                    <span class="tag-dot"></span>
                    <span>Research</span>
                    <span class="tag-count">({{< tagcount name="research" >}})</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Technology Domain -->
          <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem; color: #2a2e43; margin-bottom: 0.9rem; border-bottom: 2px solid #d8deeb; padding-bottom: 0.35rem;">
              Technology Domain
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
              <a href="/tags/desktop/" style="text-decoration: none;">
                <div class="tag-chip">
                  Desktop Apps <span>({{< tagcount name="desktop" >}})</span>
                </div>
              </a>
              <a href="/tags/web/" style="text-decoration: none;">
                <div class="tag-chip">
                  Web <span>({{< tagcount name="web" >}})</span>
                </div>
              </a>
              <a href="/tags/mobile/" style="text-decoration: none;">
                <div class="tag-chip">
                  Mobile <span>({{< tagcount name="mobile" >}})</span>
                </div>
              </a>
              <a href="/tags/embedded/" style="text-decoration: none;">
                <div class="tag-chip">
                  Embedded <span>({{< tagcount name="embedded" >}})</span>
                </div>
              </a>
              <a href="/tags/hardware/" style="text-decoration: none;">
                <div class="tag-chip">
                  Hardware <span>({{< tagcount name="hardware" >}})</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Specialization -->
          <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem; color: #264653; margin-bottom: 0.9rem; border-bottom: 2px solid #d8deeb; padding-bottom: 0.35rem;">
              Specialization
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
              <a href="/tags/iot/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  IoT <span>({{< tagcount name="iot" >}})</span>
                </div>
              </a>
              <a href="/tags/robotics/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  Robotics <span>({{< tagcount name="robotics" >}})</span>
                </div>
              </a>
              <a href="/tags/automation/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  Automation <span>({{< tagcount name="automation" >}})</span>
                </div>
              </a>
              <a href="/tags/ai/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  AI <span>({{< tagcount name="ai" >}})</span>
                </div>
              </a>
              <a href="/tags/mechatronics/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  Mechatronics <span>({{< tagcount name="mechatronics" >}})</span>
                </div>
              </a>
              <a href="/tags/aerospace/" style="text-decoration: none;">
                <div class="tag-chip" style="background: #edf1f7; border-color: #c7cedb; color: #264653;">
                  Aerospace <span>({{< tagcount name="aerospace" >}})</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Industry/Application -->
          <div>
            <h2 style="font-size: 1.5rem; color: #2a2e43; margin-bottom: 0.9rem; border-bottom: 2px solid #d8deeb; padding-bottom: 0.35rem;">
              Industry & Application
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.6rem;">
              <a href="/tags/business/" style="text-decoration: none;">
                <div class="industry-card">
                  <span>Business</span><span class="count">{{< tagcount name="business" >}}</span>
                </div>
              </a>
              <a href="/tags/education/" style="text-decoration: none;">
                <div class="industry-card">
                  <span>Education</span><span class="count">{{< tagcount name="education" >}}</span>
                </div>
              </a>
              <a href="/tags/healthcare/" style="text-decoration: none;">
                <div class="industry-card">
                  <span>Healthcare</span><span class="count">{{< tagcount name="healthcare" >}}</span>
                </div>
              </a>
              <a href="/tags/entertainment/" style="text-decoration: none;">
                <div class="industry-card">
                  <span>Entertainment</span><span class="count">{{< tagcount name="entertainment" >}}</span>
                </div>
              </a>
              <a href="/tags/networking/" style="text-decoration: none;">
                <div class="industry-card">
                  <span>Networking</span><span class="count">{{< tagcount name="networking" >}}</span>
                </div>
              </a>
            </div>
          </div>

        </div>
    design:
      spacing:
        padding: [0, 0, '3rem', 0]
---
