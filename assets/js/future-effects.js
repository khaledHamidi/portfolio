/**
 * Future Effects - Advanced Visual Enhancements
 * Particle System, Custom Cursor, Micro-interactions
 */

(function() {
  'use strict';

  // ============================================
  // 1. PARTICLE SYSTEM WITH MOUSE TRACKING
  // ============================================
  class ParticleSystem {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.mouse = { x: null, y: null, radius: 150 };
      this.animationId = null;
      this.active = true; // Added active state
      this.init();
    }

    init() {
      this.canvas = document.createElement('canvas');
      this.canvas.id = 'particle-canvas';
      this.canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.6;
      `;
      document.body.prepend(this.canvas);
      this.ctx = this.canvas.getContext('2d');

      this.resize();
      this.createParticles();
      this.bindEvents();
      if (this.active) { // Only animate if active
        this.animate();
      }
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    createParticles() {
      const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
      this.particles = [];
      for (let i = 0; i < particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    bindEvents() {
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });

      window.addEventListener('resize', () => {
        this.resize();
        this.createParticles();
      });
    }

    animate() {
      if (!this.active) { // Stop animation if not active
        cancelAnimationFrame(this.animationId);
        return;
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Get theme color
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? '129, 140, 248' : '99, 102, 241';

      this.particles.forEach((p, i) => {
        // Mouse interaction
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = this.mouse.x - p.x;
          const dy = this.mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < this.mouse.radius) {
            const force = (this.mouse.radius - dist) / this.mouse.radius;
            p.x -= dx * force * 0.02;
            p.y -= dy * force * 0.02;
          }
        }

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.x < 0) p.x = this.canvas.width;
        if (p.x > this.canvas.width) p.x = 0;
        if (p.y < 0) p.y = this.canvas.height;
        if (p.y > this.canvas.height) p.y = 0;

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        this.ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(${particleColor}, ${0.15 * (1 - dist / 120)})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      });

      this.animationId = requestAnimationFrame(() => this.animate());
    }

    // New method to activate/deactivate
    setActive(state) {
      if (this.active === state) return;
      this.active = state;
      if (this.active) {
        this.animate();
      } else {
        cancelAnimationFrame(this.animationId);
        if (this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
    }
  }

  // ============================================
  // 2. CUSTOM CURSOR WITH TRAIL
  // ============================================
  class CustomCursor {
    constructor() {
      this.cursor = null;
      this.cursorDot = null;
      this.trail = [];
      this.trailLength = 8;
      this.init();
    }

    init() {
      // Skip on touch devices
      if ('ontouchstart' in window) return;

      // Create main cursor
      this.cursor = document.createElement('div');
      this.cursor.className = 'custom-cursor';
      document.body.appendChild(this.cursor);

      // Create cursor dot
      this.cursorDot = document.createElement('div');
      this.cursorDot.className = 'custom-cursor-dot';
      document.body.appendChild(this.cursorDot);

      // Create trail elements
      for (let i = 0; i < this.trailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.opacity = 1 - (i / this.trailLength);
        trail.style.transform = 'scale(' + (1 - i * 0.1) + ')';
        document.body.appendChild(trail);
        this.trail.push({ el: trail, x: 0, y: 0 });
      }

      this.bindEvents();
    }

    bindEvents() {
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant dot movement
        this.cursorDot.style.left = mouseX + 'px';
        this.cursorDot.style.top = mouseY + 'px';
      });

      // Smooth cursor follow
      const animate = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        this.cursor.style.left = cursorX + 'px';
        this.cursor.style.top = cursorY + 'px';

        // Update trail
        let prevX = cursorX, prevY = cursorY;
        this.trail.forEach((t, i) => {
          const speed = 0.3 - (i * 0.02);
          t.x += (prevX - t.x) * speed;
          t.y += (prevY - t.y) * speed;
          t.el.style.left = t.x + 'px';
          t.el.style.top = t.y + 'px';
          prevX = t.x;
          prevY = t.y;
        });

        requestAnimationFrame(animate);
      };
      animate();

      // Hover effects on interactive elements
      const interactiveElements = 'a, button, input, textarea, select, [role="button"], .card, .btn';
      
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveElements)) {
          this.cursor.classList.add('cursor-hover');
          this.cursorDot.classList.add('cursor-hover');
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveElements)) {
          this.cursor.classList.remove('cursor-hover');
          this.cursorDot.classList.remove('cursor-hover');
        }
      });

      // Click effect
      document.addEventListener('mousedown', () => {
        this.cursor.classList.add('cursor-click');
      });
      document.addEventListener('mouseup', () => {
        this.cursor.classList.remove('cursor-click');
      });
    }
  }

  // ============================================
  // 3. MAGNETIC BUTTONS
  // ============================================
  class MagneticButtons {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('.hero-links a, .btn, button[type="submit"]').forEach(btn => {
        btn.classList.add('magnetic-btn');
        
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0, 0)';
        });
      });
    }
  }

  // ============================================
  // 4. TILT EFFECT FOR CARDS
  // ============================================
  class TiltCards {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('.hero-profile-card, .grid > a, .card').forEach(card => {
        card.classList.add('tilt-card');
        
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
    }
  }

  // ============================================
  // 5. GLITCH TEXT EFFECT
  // ============================================
  class GlitchText {
    constructor() {
      this.init();
    }

    init() {
      const heroTitle = document.querySelector('.hero-profile-card h2');
      if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.classList.add('glitch-text');
        heroTitle.setAttribute('data-text', text);
      }
    }
  }

  // ============================================
  // 6. SCROLL ANIMATIONS
  // ============================================
  class ScrollAnimations {
    constructor() {
      this.init();
    }

    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('section, .card, .grid > a, article').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
      });
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  function initEffects() {
    let particleSystemInstance;
    let tiltCardsInstance;

    // Intersection Observer for Hero Section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Hero section is visible
            if (!particleSystemInstance) {
              particleSystemInstance = new ParticleSystem();
            } else {
              particleSystemInstance.setActive(true);
            }
            if (!tiltCardsInstance) {
              setTimeout(() => { tiltCardsInstance = new TiltCards(); }, 500);
            } else {
              // No setActive for TiltCards, they are always active when initialized
            }
          } else {
            // Hero section is not visible
            if (particleSystemInstance) {
              particleSystemInstance.setActive(false);
            }
            // TiltCards will be deactivated by their own IntersectionObserver
          }
        });
      }, { threshold: 0.1 });
      heroObserver.observe(heroSection);
    }

    // Initialize other effects that are not tied to the hero section visibility
    new CustomCursor();
    new GlitchText();
    new ScrollAnimations();
    new MagneticButtons(); // Magnetic buttons are always active
  }

  initEffects();
})();
