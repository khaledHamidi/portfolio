/**
 * Language Chooser Handler
 * Manages the language dropdown menu toggle
 */

(function() {
  'use strict';

  function initLanguageChooser() {
    const button = document.querySelector('[data-hb-language-chooser]');
    if (!button) return;

    const dropdown = button.nextElementSibling;
    if (!dropdown || dropdown.tagName !== 'UL') return;

    // Close dropdown when clicking outside
    function closeDropdown(event) {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        button.setAttribute('data-state', 'closed');
        document.removeEventListener('click', closeDropdown);
      }
    }

    // Toggle dropdown on button click
    button.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      const currentState = button.getAttribute('data-state');
      const newState = currentState === 'open' ? 'closed' : 'open';
      
      button.setAttribute('data-state', newState);
      
      if (newState === 'open') {
        // Add click listener to close when clicking outside
        setTimeout(() => {
          document.addEventListener('click', closeDropdown);
        }, 0);
      } else {
        document.removeEventListener('click', closeDropdown);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && button.getAttribute('data-state') === 'open') {
        button.setAttribute('data-state', 'closed');
        document.removeEventListener('click', closeDropdown);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageChooser);
  } else {
    initLanguageChooser();
  }
})();
