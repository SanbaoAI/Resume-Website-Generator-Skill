document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initAnimations();
  initFooterYear();
});

function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const mobileNav = document.querySelector('.nav__mobile');
  const header = document.querySelector('.site-header');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('is-open', !isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
      });
    });
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initScrollEffects() {
  // Reserved for future scroll-driven effects
}

function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, i) => {
    el.style.transitionDelay = `${i * 100}ms`;
    requestAnimationFrame(() => el.classList.add('is-visible'));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}

function initFooterYear() {
  const yearEl = document.querySelector('.footer__year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
