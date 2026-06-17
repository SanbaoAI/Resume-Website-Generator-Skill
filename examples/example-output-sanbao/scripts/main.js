document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initFooterYear();
  initPdfExport();
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
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 80}ms`;
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

function initPdfExport() {
  const buttons = document.querySelectorAll('[data-export-pdf], #export-pdf');

  buttons.forEach(btn => {
    btn.addEventListener('click', exportPdf);
  });
}

async function exportPdf() {
  const main = document.querySelector('#main');
  if (!main) return;

  const filename = 'SanbaoAI-Resume-Example.pdf';
  const btn = document.querySelector('#export-pdf');
  const originalText = btn?.textContent;

  if (btn) {
    btn.textContent = '生成中…';
    btn.disabled = true;
  }

  // Prefer html2pdf.js for one-click download
  if (typeof html2pdf !== 'undefined') {
    const opt = {
      margin: [10, 10, 10, 10],
      filename,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        ignoreElements: (el) => el.classList?.contains('no-print')
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(main).save();
    } catch (err) {
      console.warn('html2pdf failed, falling back to print:', err);
      window.print();
    }
  } else {
    // Fallback: browser print → Save as PDF
    window.print();
  }

  if (btn) {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}
