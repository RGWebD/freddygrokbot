(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // year
  document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());

  // sticky glass nav + progress
  const nav = document.querySelector('.nav');
  const bar = document.querySelector('.progress span');
  const parallax = [...document.querySelectorAll('[data-parallax], .saga-art')];
  let ticking = false;
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('scrolled', y > 30);
    if (bar) bar.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
    if (!reduce) parallax.forEach(el => {
      const r = el.getBoundingClientRect();
      const c = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      el.style.setProperty('--py', (c * -60).toFixed(1) + 'px');
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // mobile menu
  const toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
  }));
  addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { toggle.click(); toggle.focus(); } });

  // scroll reveal
  const items = [...document.querySelectorAll('.reveal')];
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('rv');
    // stagger siblings
    items.forEach(el => {
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      const i = sibs.indexOf(el); if (i > 0) el.style.setProperty('--d', (i * 0.09).toFixed(2) + 's');
    });
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(el => io.observe(el));
  }

  if (fine && !reduce) {
    // hero spotlight + 3D fan
    const hero = document.querySelector('.hero'), fan = document.querySelector('.fan');
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      hero.style.setProperty('--gx', (x * 100) + '%'); hero.style.setProperty('--gy', (y * 100) + '%');
      fan.style.setProperty('--ry', ((x - .5) * 22).toFixed(2) + 'deg');
      fan.style.setProperty('--rx', ((.5 - y) * 14).toFixed(2) + 'deg');
    });
    // book cover tilt
    document.querySelectorAll('.tilt a').forEach(a => {
      a.addEventListener('pointermove', e => {
        const r = a.getBoundingClientRect();
        a.style.setProperty('--ty', (((e.clientX - r.left) / r.width - .5) * 16).toFixed(2) + 'deg');
        a.style.setProperty('--tx', ((.5 - (e.clientY - r.top) / r.height) * 12).toFixed(2) + 'deg');
      });
      a.addEventListener('pointerleave', () => { a.style.setProperty('--ty', '0deg'); a.style.setProperty('--tx', '0deg'); });
    });
    // genre spotlight
    document.querySelectorAll('.genre').forEach(g => g.addEventListener('pointermove', e => {
      const r = g.getBoundingClientRect();
      g.style.setProperty('--x', (e.clientX - r.left) + 'px'); g.style.setProperty('--y', (e.clientY - r.top) + 'px');
    }));
    // magnetic buttons
    document.querySelectorAll('.magnetic').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * .18).toFixed(1) + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * .28).toFixed(1) + 'px');
      });
      b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
  }

  // lightbox
  const dlg = document.querySelector('.lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    const links = [...document.querySelectorAll('.gallery .lb')];
    const all = [...document.querySelectorAll('a.lb')];
    const img = dlg.querySelector('img'), cap = dlg.querySelector('figcaption');
    let set = links, idx = 0, opener = null;
    const show = i => {
      idx = (i + set.length) % set.length;
      const a = set[idx], t = a.querySelector('img');
      img.src = a.getAttribute('href'); img.alt = t ? t.alt : ''; cap.textContent = a.dataset.caption || '';
    };
    all.forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); opener = a;
      set = links.includes(a) ? links : [a];
      show(set.indexOf(a)); dlg.showModal();
      dlg.querySelector('.lb-prev').hidden = dlg.querySelector('.lb-next').hidden = set.length < 2;
    }));
    dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
    dlg.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
    dlg.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
    dlg.addEventListener('close', () => { img.removeAttribute('src'); opener && opener.focus(); });
  }
})();
