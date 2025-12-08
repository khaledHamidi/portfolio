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
      this.soundPools = {};
      this.soundFiles = {};
      this.pendingPlays = [];
      this.poolSize = 3;
      this.processingQueue = false;
      this.enabled = true;
      this.volume = 0.5;
      this.loaded = false;
      this.optionIndex = 0;
      this.userInteracted = false;
      this.awaitingUnlock = false;
      this.isUnlocking = false;

      this.init();
    }

    init() {
      this.preloadSounds();
      this.setupUserInteraction();
      this.setupVisibilityHandlers();
      this.bindEvents();
      this.createToggleButton();
      this.createUnlockOverlay();
      console.log('[SoundFX] Initialized successfully');
    }

    setupUserInteraction() {
      const unlock = () => {
        if (this.isUnlocking) return;
        this.userInteracted = true;
        this.awaitingUnlock = false;
        console.log('[SoundFX] User interaction detected - unlocking audio');
        this.unlockAudio();
        this.flushPendingPlays();
      };

      document.addEventListener('click', unlock, { passive: true });
      document.addEventListener('keydown', unlock, { passive: true });
      document.addEventListener('touchstart', unlock, { passive: true });
      document.addEventListener('pointerdown', unlock, { passive: true });
    }

    createUnlockOverlay() {
      // Skip if already interacted
      if (this.userInteracted) return;

      const overlay = document.createElement('div');
      overlay.id = 'audio-unlock-overlay';
      overlay.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
          <img src="/images/volume.png" alt="Sound" style="width:64px;height:64px;filter:drop-shadow(0 0 20px rgba(99,102,241,0.8));animation:pulse-glow 1.5s ease-in-out infinite;">
          <span style="font-size:16px;font-weight:600;">Click to unlock audio</span>
          <span style="font-size:14px;opacity:0.8;">اضغط لتفعيل الصوت</span>
        </div>
      `;
      overlay.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 20px;
        z-index: 10000;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(99, 102, 241, 0.4);
        border-radius: 16px;
        padding: 20px 28px;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(99, 102, 241, 0.2);
        transition: opacity 0.3s ease, transform 0.3s ease;
        animation: slide-in 0.4s ease-out;
      `;

      // Add keyframe animations
      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);

      const removeOverlay = () => {
        if (overlay.parentNode) {
          overlay.style.opacity = '0';
          overlay.style.transform = 'translateY(20px)';
          setTimeout(() => {
            if (overlay.parentNode) {
              overlay.parentNode.removeChild(overlay);
            }
          }, 300);
        }
      };

      overlay.addEventListener('click', () => {
        this.userInteracted = true;
        this.awaitingUnlock = false;
        this.unlockAudio();
        this.flushPendingPlays();
        removeOverlay();
      });

      // Also remove on any user interaction
      const onInteract = () => {
        if (this.userInteracted) {
          removeOverlay();
          document.removeEventListener('click', onInteract);
          document.removeEventListener('keydown', onInteract);
          document.removeEventListener('touchstart', onInteract);
        }
      };
      document.addEventListener('click', onInteract, { passive: true });
      document.addEventListener('keydown', onInteract, { passive: true });
      document.addEventListener('touchstart', onInteract, { passive: true });

      document.body.appendChild(overlay);
    }

    setupVisibilityHandlers() {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden && this.userInteracted) {
          this.awaitingUnlock = false;
          this.unlockAudio();
        }
      });

      window.addEventListener('focus', () => {
        if (this.userInteracted) {
          this.awaitingUnlock = false;
          this.unlockAudio();
        }
      });
    }

    preloadSounds() {
      this.soundFiles = {
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

      Object.entries(this.soundFiles).forEach(([name, path]) => {
        this.soundPools[name] = [];
        for (let i = 0; i < this.poolSize; i++) {
          const audio = this.createAudio(path, name);
          this.soundPools[name].push(audio);
        }
        this.sounds[name] = this.soundPools[name][0];
      });

      this.loaded = true;
    }

    createAudio(path, name) {
      const audio = new Audio(path);
      audio.preload = 'auto';
      audio.crossOrigin = 'anonymous';
      audio.volume = this.volume;
      audio.dataset.playing = 'false';
      audio.dataset.unlocked = 'false';

      audio.addEventListener('ended', () => {
        audio.dataset.playing = 'false';
        audio.currentTime = 0;
      });

      audio.addEventListener('pause', () => {
        if (audio.currentTime === 0 || audio.currentTime >= audio.duration) {
          audio.dataset.playing = 'false';
        }
      });

      audio.addEventListener('error', (e) => {
        console.error(`[SoundFX] Failed to load: ${name}`, e);
      });

      audio.addEventListener('canplaythrough', () => {
        audio.dataset.ready = 'true';
      }, { once: true });

      return audio;
    }

    getAvailableAudio(pool) {
      for (const audio of pool) {
        if (audio.dataset.playing !== 'true') {
          return audio;
        }
      }
      return null;
    }

    queuePending(soundName) {
      if (this.pendingPlays.length > 20) {
        this.pendingPlays.shift();
      }
      this.pendingPlays.push(soundName);
    }

    flushPendingPlays() {
      if (this.processingQueue) return;
      if (!this.userInteracted || this.awaitingUnlock) return;
      if (this.pendingPlays.length === 0) return;

      this.processingQueue = true;
      const queue = this.pendingPlays.slice();
      this.pendingPlays.length = 0;

      while (queue.length) {
        const name = queue.shift();
        this.play(name);
        if (this.awaitingUnlock) {
          // Playback blocked again; re-queue remaining items and stop.
          this.pendingPlays = queue.concat(this.pendingPlays);
          break;
        }
      }

      this.processingQueue = false;
    }

    handlePlaybackError(err, soundName, audio) {
      if (audio) {
        try { audio.pause(); } catch (pauseErr) {
          console.debug('[SoundFX] Pause error:', pauseErr);
        }
        audio.currentTime = 0;
        audio.dataset.playing = 'false';
        audio.dataset.unlocked = 'false';
      }

      if (!err) return;

      if (err.name === 'NotAllowedError') {
        console.warn(`[SoundFX] Playback blocked for ${soundName}: ${err.message}`);
        this.awaitingUnlock = true;
        this.userInteracted = false;
        this.queuePending(soundName);
      } else if (err.name !== 'AbortError') {
        console.warn(`[SoundFX] Playback failed for ${soundName}: ${err.message || err}`);
      }
    }

    unlockAudio() {
      if (this.isUnlocking) return;
      this.isUnlocking = true;

      const attempts = [];
      Object.values(this.soundPools).forEach(pool => {
        pool.forEach((audio, index) => {
          const needsUnlock = this.awaitingUnlock || audio.dataset.unlocked !== 'true' || index === 0;
          if (!needsUnlock) return;

          audio.muted = true;
          audio.currentTime = 0;
          const maybePromise = audio.play();

          if (maybePromise && typeof maybePromise.then === 'function') {
            attempts.push(
              maybePromise.then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.muted = false;
                audio.dataset.unlocked = 'true';
                audio.dataset.playing = 'false';
              }).catch(err => {
                audio.muted = false;
                audio.dataset.playing = 'false';
                if (err.name === 'NotAllowedError') {
                  this.awaitingUnlock = true;
                  this.userInteracted = false;
                }
                console.warn('[SoundFX] Unlock attempt failed:', err.message || err);
              })
            );
          } else {
            audio.pause();
            audio.currentTime = 0;
            audio.muted = false;
            audio.dataset.unlocked = 'true';
            audio.dataset.playing = 'false';
          }
        });
      });

      const finalize = () => {
        this.isUnlocking = false;
        if (!this.awaitingUnlock) {
          this.flushPendingPlays();
        }
      };

      if (attempts.length) {
        Promise.allSettled(attempts).then(finalize).catch(finalize);
      } else {
        finalize();
      }
    }

    play(soundName) {
      if (!this.enabled || !this.loaded) {
        return;
      }

      if (!this.sounds[soundName] || !this.soundPools[soundName]) {
        console.warn(`[SoundFX] Unknown sound requested: ${soundName}`);
        return;
      }

      if (!this.userInteracted || this.awaitingUnlock) {
        this.queuePending(soundName);
        return;
      }

      const pool = this.soundPools[soundName];
      let audio = this.getAvailableAudio(pool);

      if (!audio) {
        audio = pool[0];
        try { audio.pause(); } catch (pauseErr) {
          console.debug('[SoundFX] Pause error:', pauseErr);
        }
        audio.currentTime = 0;
      }

      audio.volume = this.volume;
      audio.muted = false;
      audio.dataset.playing = 'true';

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(err => {
          this.handlePlaybackError(err, soundName, audio);
        });
      }
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
      const heroSliderCards = '.hero-slider-slide';
      const heroStatsCards = '.hero-link-card';

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

        // Hero slider cards - strong hover and leave
        if (target.closest(heroSliderCards)) {
          const el = target.closest(heroSliderCards);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
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

        // Hero stats cards - mini hover
        if (target.closest(heroStatsCards)) {
          const el = target.closest(heroStatsCards);
          if (!el.dataset.hovered) {
            el.dataset.hovered = 'true';
            this.play('hoverMini');
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
        const allSelectors = `${bigElements}, ${smallElements}, ${buttons}, ${featuredElements}, ${dropdownButtons}, ${dropdownItems}, ${heroSliderCards}, ${heroStatsCards}`;
        
        if (target.closest(allSelectors)) {
          const el = target.closest(allSelectors);
          if (el && el.dataset.hovered) {
            delete el.dataset.hovered;
            // Play open.mp3 for cards when mouse leaves
            if (target.closest(heroSliderCards) || target.closest('.card')) {
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
      button.innerHTML = `<img src="/images/volume.png" alt="Sound On" style="width:28px;height:28px;display:${this.enabled ? 'inline' : 'none'};">` +
        `<img src="/images/mute.png" alt="Sound Off" style="width:28px;height:28px;display:${this.enabled ? 'none' : 'inline'};">`;
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
        button.innerHTML = `<img src="/images/volume.png" alt="Sound On" style="width:28px;height:28px;display:${this.enabled ? 'inline' : 'none'};">` +
          `<img src="/images/mute.png" alt="Sound Off" style="width:28px;height:28px;display:${this.enabled ? 'none' : 'inline'};">`;
        localStorage.setItem('soundEffectsEnabled', this.enabled);
        if (this.enabled) {
          this.play('click');
        }
      });

      // Restore preference
      const saved = localStorage.getItem('soundEffectsEnabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
        button.innerHTML = `<img src="/images/volume.png" alt="Sound On" style="width:28px;height:28px;display:${this.enabled ? 'inline' : 'none'};">` +
          `<img src="/images/mute.png" alt="Sound Off" style="width:28px;height:28px;display:${this.enabled ? 'none' : 'inline'};">`;
      }

      document.body.appendChild(button);
    }

    setVolume(level) {
      this.volume = Math.max(0, Math.min(1, level));
      Object.values(this.soundPools).forEach(pool => {
        pool.forEach(sound => {
          sound.volume = this.volume;
        });
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
