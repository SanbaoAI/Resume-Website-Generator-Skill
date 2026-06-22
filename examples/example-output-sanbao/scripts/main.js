document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initStatCounters();
  initFooterYear();
});

function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const mobileNav = document.querySelector('.nav__mobile');
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('#hero');

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

  if (header && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('is-light', !entry.isIntersecting);
        header.classList.toggle('is-scrolled', !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(hero);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  document.querySelectorAll('.hero .reveal, .hero__name, .hero__tagline, .hero__subhead, .hero__actions, .stat-card').forEach((el, i) => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    el.style.transitionDelay = `${i * 70}ms`;
    requestAnimationFrame(() => el.classList.add('is-visible'));
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach(el => {
    if (!el.closest('.hero')) observer.observe(el);
  });
}

function initFooterYear() {
  const yearEl = document.querySelector('.footer__year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initStatCounters() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stats = document.querySelectorAll('.stat__value[data-count]');

  stats.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion || Number.isNaN(target)) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}
