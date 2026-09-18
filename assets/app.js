(() => {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.textContent = isOpen ? '×' : '☰';
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    }));
  }


  document.querySelectorAll('.mobile-services-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const group = toggle.closest('.mobile-services');
      const isOpen = group.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const revealEls = document.querySelectorAll('.reveal, .stagger');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  const forms = document.querySelectorAll('[data-demo-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkbox = form.querySelector('input[type="checkbox"]');
      if (checkbox && !checkbox.checked) {
        checkbox.focus();
        return;
      }
      const success = form.querySelector('.form-success');
      if (success) success.classList.add('show');
      form.reset();
    });
  });

  document.querySelectorAll('[data-scroll-to-form]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = document.querySelector('#request-form');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
