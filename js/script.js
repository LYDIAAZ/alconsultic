(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  // Sticky header background on scroll
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('nav-open', !expanded);
    });

    mainNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        header.classList.remove('nav-open');
      }
    });
  }

  // Scroll-reveal sections
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Story scrollytelling: the sticky laptop's screen content follows whichever
  // chapter (hero / about / services) is currently centered in the viewport.
  var storyVisual = document.getElementById('storyVisual');
  var chapters = document.querySelectorAll('.story-chapter');
  var screenPanels = document.querySelectorAll('.screen-panel');

  function setActiveChapter(chapter) {
    if (!storyVisual) return;
    storyVisual.dataset.chapter = chapter;
    screenPanels.forEach(function (panel) {
      panel.classList.toggle('is-active', panel.dataset.chapter === chapter);
    });
  }
  setActiveChapter('hero');

  if (chapters.length && storyVisual && 'IntersectionObserver' in window) {
    var chapterObserver = new IntersectionObserver(
      function (entries) {
        var best = null;
        entries.forEach(function (entry) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry;
          }
        });
        if (best) { setActiveChapter(best.target.dataset.chapter); }
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-20% 0px -20% 0px' }
    );
    chapters.forEach(function (ch) { chapterObserver.observe(ch); });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Contact form (front-end only placeholder — wire to backend / WP handler later)
  var form = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formNote.textContent = 'Merci, votre message a bien été pris en compte. Nous revenons vers vous rapidement.';
      form.reset();
    });
  }
})();
