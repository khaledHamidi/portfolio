/**
 * Sound Effects System v2.0
 * Clean, efficient audio using Web Audio API
 * No unlock hacks, no console spam, no lag
 */

(function() {
  'use strict';

  class SoundEffects {
    constructor() {
      this.ctx = null;
      this.buffers = {};
      this.enabled = true;
      this.volume = 0.5;
      this.loaded = false;
      this.optionIndex = 0;
      this.unlocked = false;
      this.badgeEl = null;

      this.soundFiles = {
        click: '/js/audio/click.mp3',
        hover: '/js/audio/hover.mp3',
        hoverMini: '/js/audio/hover_mini.mp3',
        hoverOption1: '/js/audio/hover_option1.mp3',
        hoverOption2: '/js/audio/hover_option2.mp3',
        hoverOption3: '/js/audio/hover_option3.mp3',
        hoverOut: '/js/audio/hover_out.mp3',
        hover2: '/js/audio/hover2.mp3',
        open: '/js/audio/open.mp3',
        textHover: '/js/audio/text_hover.mp3'
      };

      this.init();
    }

    init() {
      this.restorePreference();
      this.setupUnlock();
      this.bindEvents();
      this.createToggleButton();
      this.createUnlockBadge();
    }

    setupUnlock() {
      const unlock = () => {
        if (this.unlocked) return;
        
        try {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
          if (this.ctx.state === 'suspended') {
            this.ctx.resume();
          }
          this.unlocked = true;
          this.loadSounds();
          
          document.removeEventListener('click', unlock);
          document.removeEventListener('keydown', unlock);
          document.removeEventListener('touchstart', unlock);

          // Remove badge if present
          if (this.badgeEl && this.badgeEl.parentNode) {
            this.badgeEl.parentNode.removeChild(this.badgeEl);
            this.badgeEl = null;
          }
        } catch (e) {
          // Silent fail
        }
      };

      document.addEventListener('click', unlock, { passive: true });
      document.addEventListener('keydown', unlock, { passive: true });
      document.addEventListener('touchstart', unlock, { passive: true });
    }

    createUnlockBadge() {
      if (this.unlocked || this.badgeEl) return;
      const badge = document.createElement('div');
      badge.id = 'audio-unlock-badge';
      badge.style.cssText = [
        'position:fixed',
        'bottom:20px',
        'left:76px',
        'z-index:10000',
        'background:rgba(15,23,42,0.9)',
        'color:#fff',
        'border:1px solid rgba(99,102,241,0.35)',
        'border-radius:12px',
        'padding:10px 12px',
        'display:flex',
        'align-items:center',
        'gap:10px',
        'box-shadow:0 8px 24px rgba(0,0,0,0.35)',
        'font-size:14px'
      ].join(';');

      const icon = document.createElement('img');
      icon.src = '/images/volume.png';
      icon.alt = 'Sound';
      icon.style.cssText = 'width:20px;height:20px;filter:drop-shadow(0 0 6px rgba(99,102,241,0.6))';

      const textWrap = document.createElement('div');
      const line1 = document.createElement('div');
      line1.textContent = 'Click to unlock audio';
      line1.style.fontWeight = '600';
      const line2 = document.createElement('div');
      line2.textContent = 'اضغط لتفعيل الصوت';
      line2.style.opacity = '0.85';
      line2.style.fontSize = '13px';
      textWrap.appendChild(line1);
      textWrap.appendChild(line2);

      badge.appendChild(icon);
      badge.appendChild(textWrap);

      const dismiss = () => {
        if (this.badgeEl && this.badgeEl.parentNode) {
          this.badgeEl.parentNode.removeChild(this.badgeEl);
          this.badgeEl = null;
        }
        document.removeEventListener('click', dismiss);
        document.removeEventListener('keydown', dismiss);
        document.removeEventListener('touchstart', dismiss);
      };

      // Clicking the badge counts as the unlock gesture
      badge.addEventListener('click', dismiss, { passive: true });
      document.addEventListener('click', dismiss, { passive: true });
      document.addEventListener('keydown', dismiss, { passive: true });
      document.addEventListener('touchstart', dismiss, { passive: true });

      document.body.appendChild(badge);
      this.badgeEl = badge;
    }

    async loadSounds() {
      if (this.loaded || !this.ctx) return;

      const loadBuffer = async (name, url) => {
        try {
          const response = await fetch(url);
          const arrayBuffer = await response.arrayBuffer();
          this.buffers[name] = await this.ctx.decodeAudioData(arrayBuffer);
        } catch (e) {
          // Silent fail for individual sounds
        }
      };

      await Promise.all(
        Object.entries(this.soundFiles).map(([name, url]) => loadBuffer(name, url))
      );

      this.loaded = true;
    }

    play(soundName) {
      if (!this.enabled || !this.unlocked || !this.ctx || !this.buffers[soundName]) {
        return;
      }

      try {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }

        const source = this.ctx.createBufferSource();
        const gainNode = this.ctx.createGain();
        
        source.buffer = this.buffers[soundName];
        gainNode.gain.value = this.volume;
        
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
      } catch (e) {
        // Silent fail
      }
    }

    getRotatingHoverOption() {
      const options = ['hoverOption1', 'hoverOption2', 'hoverOption3'];
      const sound = options[this.optionIndex];
      this.optionIndex = (this.optionIndex + 1) % options.length;
      return sound;
    }

    bindEvents() {
      const bigElements = '.card, .grid > a, article, .hero-profile-card, .project-card, .achievement-card, .education-card, [class*="blox-"], section.home-section';
      const smallElements = '.social-links a, .nav-link, .navbar-toggler, .btn-sm, .icon-link, footer a, .tag, .badge';
      const dropdownButtons = 'span.nav-link.inline-flex.items-center';
      const dropdownItems = 'a.nav-dropdown-link';
      const buttons = 'button, .btn, [role="button"], input[type="submit"], input[type="button"]';
      const expandables = '.accordion-button, .dropdown-toggle, .nav-item.dropdown, [data-bs-toggle], details, .modal-trigger, .expandable';
      const featuredElements = '.featured, .highlight, .hero-links a, .cta-button, .primary-action';
      const heroSliderCards = '.hero-slider-slide';
      const heroStatsCards = '.hero-link-card';
      const accomplishmentCards = '.blox-accomplishments .grid > a';
      const projectCards = '.blox-projects .grid > a';

      // Click sounds
      document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest(expandables)) {
          this.play('open');
        } else if (target.closest(buttons) || target.closest('a')) {
          this.play('click');
        }
      });

      // Hover sounds
      document.addEventListener('mouseover', (e) => {
        const target = e.target;

        if (target.closest(featuredElements)) {
          const el = target.closest(featuredElements);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        if (target.closest(heroSliderCards)) {
          const el = target.closest(heroSliderCards);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        if (target.closest('.card')) {
          const el = target.closest('.card');
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        // Accomplishments/Projects cards behave like .card
        if (target.closest(accomplishmentCards) || target.closest(projectCards)) {
          const el = target.closest(accomplishmentCards) || target.closest(projectCards);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        if (target.closest(heroStatsCards)) {
          const el = target.closest(heroStatsCards);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
          }
          return;
        }

        if (target.closest(bigElements)) {
          const el = target.closest(bigElements);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play(this.getRotatingHoverOption());
          }
          return;
        }

        if (target.closest(dropdownItems)) {
          const el = target.closest(dropdownItems);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
          }
          return;
        }

        if (target.closest(dropdownButtons)) {
          const el = target.closest(dropdownButtons);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover');
          }
          return;
        }

        if (target.closest(smallElements)) {
          const el = target.closest(smallElements);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
          }
          return;
        }

        if (target.closest(buttons)) {
          const el = target.closest(buttons);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover');
          }
        }

        // Plain text hover (not links/buttons) — light sound
        // Trigger when element contains text nodes and is not interactive
        const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
        // Exclude generic DIVs to avoid too many triggers
        const isDiv = target.tagName === 'DIV';
        if (!isInteractive && !isDiv) {
          const hasText = (el) => {
            const txt = el.textContent || '';
            return txt.trim().length > 0;
          };
          const el = target;
          if (el && hasText(el)) {
            if (!el.dataset.textHovered) {
              el.dataset.textHovered = 'true';
              this.play('textHover');
            }
          }
        }
      });

      // Hover out
      document.addEventListener('mouseout', (e) => {
        const target = e.target;
        const allSelectors = `${bigElements}, ${smallElements}, ${buttons}, ${featuredElements}, ${dropdownButtons}, ${dropdownItems}, ${heroSliderCards}, ${heroStatsCards}, ${accomplishmentCards}, ${projectCards}`;
        
        if (target.closest(allSelectors)) {
          const el = target.closest(allSelectors);
          if (el && el.dataset.hovered) {
            delete el.dataset.hovered;
            if (target.closest(heroSliderCards) || target.closest('.card') || target.closest(accomplishmentCards) || target.closest(projectCards)) {
              this.play('open');
            } else if (target.closest(bigElements) || target.closest(featuredElements) || target.closest(dropdownButtons)) {
              this.play('hoverOut');
            }
          }
        }

        // Clear plain text hover flag
        const tEl = target;
        if (tEl && tEl.dataset && tEl.dataset.textHovered) {
          delete tEl.dataset.textHovered;
        }
      });

      // Keyboard
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const active = document.activeElement;
          if (active.matches(buttons) || active.matches('a') || active.matches(dropdownButtons) || active.matches(dropdownItems)) {
            this.play('click');
          }
        }
        if (e.key === 'Tab') {
          this.play('hoverMini');
        }
      });
    }

    createToggleButton() {
      const button = document.createElement('button');
      button.className = 'sound-toggle';
      button.setAttribute('aria-label', 'Toggle sound effects');
      button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: var(--primary, #6366f1);
        color: white;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s, background 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      const updateIcon = () => {
        button.innerHTML = this.enabled 
          ? '<img src="/images/volume.png" alt="Sound On" style="width:28px;height:28px;">'
          : '<img src="/images/mute.png" alt="Sound Off" style="width:28px;height:28px;">';
      };

      updateIcon();

      button.addEventListener('mouseenter', () => button.style.transform = 'scale(1.1)');
      button.addEventListener('mouseleave', () => button.style.transform = 'scale(1)');

      button.addEventListener('click', () => {
        this.enabled = !this.enabled;
        updateIcon();
        localStorage.setItem('soundEffectsEnabled', this.enabled);
        if (this.enabled) this.play('click');
      });

      document.body.appendChild(button);
    }

    restorePreference() {
      const saved = localStorage.getItem('soundEffectsEnabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
      }
    }

    setVolume(level) {
      this.volume = Math.max(0, Math.min(1, level));
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SoundEffects());
  } else {
    new SoundEffects();
  }

  window.SoundEffects = SoundEffects;
})();
