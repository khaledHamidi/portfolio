/**
 * Sound Effects System
 * Immersive audio feedback for UI interactions
 */

(function() {
  'use strict';

  console.log('[SoundFX] Script loaded');

  class SoundEffects {
    constructor() {
      console.log('[SoundFX] Initializing...');
      this.sounds = {};
      this.enabled = true;
      this.volume = 0.5;
      this.loaded = false;
      this.optionIndex = 0;
      this.userInteracted = false;
      
      this.init();
    }

    init() {
      this.preloadSounds();
      this.setupUserInteraction();
      this.bindEvents();
      this.createToggleButton();
      console.log('[SoundFX] Initialized successfully');
    }

    setupUserInteraction() {
      const unlock = () => {
        if (this.userInteracted) return;
        this.userInteracted = true;
        console.log('[SoundFX] User interaction detected - unlocking audio');
        
        // Try to play click sound immediately on first interaction
        const testSound = this.sounds.click;
        if (testSound) {
          testSound.volume = this.volume;
          testSound.play().then(() => {
            console.log('[SoundFX] Audio unlocked successfully');
          }).catch(err => {
            console.log('[SoundFX] Audio unlock failed:', err);
          });
        }
      };

      document.addEventListener('click', unlock);
      document.addEventListener('keydown', unlock);
      document.addEventListener('touchstart', unlock);
    }

    preloadSounds() {
      const soundFiles = {
        click: '/js/audio/click.mp3',
        hover: '/js/audio/hover.mp3',
        hoverMini: '/js/audio/hover_mini.mp3',
        hoverOption1: '/js/audio/hover_option1.mp3',
        hoverOption2: '/js/audio/hover_option2.mp3',
        hoverOption3: '/js/audio/hover_option3.mp3',
        hoverOut: '/js/audio/hover_out.mp3',
        hover2: '/js/audio/hover2.mp3',
        open: '/js/audio/open.mp3'
      };

      let loadedCount = 0;
      const totalCount = Object.keys(soundFiles).length;

      Object.entries(soundFiles).forEach(([name, path]) => {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.volume = this.volume;
        
        audio.addEventListener('canplaythrough', () => {
          loadedCount++;
        });
        
        audio.addEventListener('error', (e) => {
          console.error(`[SoundFX] Failed to load: ${name}`, e);
        });
        
        this.sounds[name] = audio;
      });

      this.loaded = true;
    }

    play(soundName) {
      if (!this.enabled || !this.loaded || !this.sounds[soundName]) {
        console.log(`[SoundFX] Skip play: enabled=${this.enabled}, loaded=${this.loaded}, sound=${!!this.sounds[soundName]}`);
        return;
      }
      
      console.log(`[SoundFX] Playing: ${soundName}`);
      const original = this.sounds[soundName];
      const sound = original.cloneNode();
      sound.volume = this.volume;
      sound.play().catch(err => {
        console.log(`[SoundFX] Play failed for ${soundName}:`, err.message);
      });
    }

    getRotatingHoverOption() {
      const options = ['hoverOption1', 'hoverOption2', 'hoverOption3'];
      const sound = options[this.optionIndex];
      this.optionIndex = (this.optionIndex + 1) % options.length;
      return sound;
    }

    bindEvents() {
      // Selectors
      const bigElements = '.card, .grid > a, article, .hero-profile-card, .project-card, .achievement-card, .education-card, [class*="blox-"], section.home-section';
      const smallElements = '.social-links a, .nav-link, .navbar-toggler, .btn-sm, .icon-link, footer a, .tag, .badge';
      const dropdownButtons = 'span.nav-link.inline-flex.items-center'; // For dropdown main buttons
      const dropdownItems = 'a.nav-dropdown-link'; // For individual dropdown items
      const buttons = 'button, .btn, [role="button"], input[type="submit"], input[type="button"]';
      const expandables = '.accordion-button, .dropdown-toggle, .nav-item.dropdown, [data-bs-toggle], details, .modal-trigger, .expandable';
      const featuredElements = '.featured, .highlight, .hero-links a, .cta-button, .primary-action';

      // Click sounds
      document.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.closest(expandables)) {
          this.play('open');
        } else if (target.closest(buttons) || target.closest('a')) {
          this.play('click');
        }
      });

      // Hover sounds - using mouseenter for better performance
      document.addEventListener('mouseover', (e) => {
        const target = e.target;

        // Featured/highlighted items - stronger hover
        if (target.closest(featuredElements)) {
          if (!target.closest(featuredElements).dataset.hovered) {
            target.closest(featuredElements).dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        // Cards - hover2.mp3 on mouseover
        if (target.closest('.card')) {
          const el = target.closest('.card');
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover2');
          }
          return;
        }

        // Big elements - main hover sound with rotation
        if (target.closest(bigElements)) {
          const el = target.closest(bigElements);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play(this.getRotatingHoverOption());
          }
          return;
        }

        // Dropdown items - mini hover
        if (target.closest(dropdownItems)) {
          const el = target.closest(dropdownItems);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
          }
          return;
        }

        // Dropdown buttons - regular hover
        if (target.closest(dropdownButtons)) {
          const el = target.closest(dropdownButtons);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover');
          }
          return;
        }

        // Small elements - mini hover
        if (target.closest(smallElements)) {
          const el = target.closest(smallElements);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
          }
          return;
        }

        // Buttons - regular hover
        if (target.closest(buttons)) {
          const el = target.closest(buttons);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hover');
          }
        }
      });

      // Hover out - clear hovered state and optionally play sound
      document.addEventListener('mouseout', (e) => {
        const target = e.target;
        const allSelectors = `${bigElements}, ${smallElements}, ${buttons}, ${featuredElements}, ${dropdownButtons}, ${dropdownItems}`;
        
        if (target.closest(allSelectors)) {
          const el = target.closest(allSelectors);
          if (el && el.dataset.hovered) {
            delete el.dataset.hovered;
            // Play open.mp3 for cards when mouse leaves
            if (target.closest('.card')) {
              this.play('open');
            } else if (target.closest(bigElements) || target.closest(featuredElements) || target.closest(dropdownButtons)) {
              this.play('hoverOut');
            }
          }
        }
      });

      // Keyboard navigation support
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
      button.innerHTML = this.enabled ? '🔊' : '🔇';
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
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s, background 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });

      button.addEventListener('click', () => {
        this.enabled = !this.enabled;
        button.innerHTML = this.enabled ? '🔊' : '🔇';
        localStorage.setItem('soundEffectsEnabled', this.enabled);
        if (this.enabled) {
          this.play('click');
        }
      });

      // Restore preference
      const saved = localStorage.getItem('soundEffectsEnabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
        button.innerHTML = this.enabled ? '🔊' : '🔇';
      }

      document.body.appendChild(button);
    }

    setVolume(level) {
      this.volume = Math.max(0, Math.min(1, level));
      Object.values(this.sounds).forEach(sound => {
        sound.volume = this.volume;
      });
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SoundEffects());
  } else {
    new SoundEffects();
  }

  // Expose globally for manual control
  window.SoundEffects = SoundEffects;
})();
