// Fix for Arabic search issue in Hugo Blox
document.addEventListener('DOMContentLoaded', function () {
  if (window.hb_search) {
    window.hb_search.options.rtl = true;
  }
});
