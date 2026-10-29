/* E-Portfolio PPG - JavaScript Vanilla.
   File ini hanya mengatur navigasi dan interaksi. Isi konten diedit di index.html. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const views = $$('.view'), links = $$('[data-view]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = $('#main-nav'), toggle = $('.nav-toggle');
  $$('.subpanel').forEach((p, i) => (p.hidden = i > 0)); // subtab pertama aktif

  // Menampilkan halaman/tab/subtab/bagian sesuai hash URL
  function show(first) {
    const id = decodeURIComponent(location.hash.slice(1)) || 'beranda';
    const el = document.getElementById(id) || $('#beranda');
    const view = el.classList.contains('view') ? el : (el.closest('.view') || $('#beranda'));
    views.forEach(v => (v.hidden = v !== view));
    links.forEach(a => a.dataset.view === view.id ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    const panel = el.closest('.subpanel');
    if (panel) {
      $$('.subpanel', view).forEach(p => (p.hidden = p !== panel));
      $$('[role=tab]', view).forEach(t => {
        const on = t.getAttribute('aria-controls') === panel.id;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
      });
    }
    const d = el.closest('details'); if (d) d.open = true;
    document.title = `${$('h1,h2', view).textContent} — E-Portfolio PPG`;
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
    requestAnimationFrame(() => {
      if (el === view) { scrollTo({ top: 0 }); if (!first) { view.tabIndex = -1; view.focus({ preventScroll: true }); } }
      else (el === panel ? $('.subtabs', view) : el).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  }

  // Subtab (ARIA tabs + panah keyboard)
  $$('[role=tab]').forEach(t => {
    t.addEventListener('click', () => (location.hash = t.getAttribute('aria-controls')));
    t.addEventListener('keydown', e => {
      const tabs = $$('[role=tab]', t.parentElement), i = tabs.indexOf(t);
      const n = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (n === undefined) return;
      e.preventDefault();
      const next = tabs[(n + tabs.length) % tabs.length]; next.focus(); next.click();
    });
  });

  // Menu hamburger
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open);
  });

  // Kembali ke atas
  const top = $('#to-top');
  addEventListener('scroll', () => (top.hidden = scrollY < 500), { passive: true });
  top.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  // Pencarian bagian di Daftar Isi
  const q = $('#toc-search'), items = $$('.toc li'), none = $('#toc-none');
  q.addEventListener('input', () => {
    const v = q.value.trim().toLowerCase(); let n = 0;
    items.forEach(li => { const m = !v || li.textContent.toLowerCase().includes(v); li.hidden = !m; if (m) n++; });
    $$('.toc-group').forEach(g => (g.hidden = !$$('li', g).some(li => !li.hidden)));
    none.hidden = n > 0;
  });

  // Penanda progres (boleh dihapus saat publikasi: lihat README)
  const pb = $('#toggle-progress');
  if (pb) pb.addEventListener('click', () => {
    const h = document.body.classList.toggle('hide-progress');
    pb.setAttribute('aria-pressed', h);
    pb.textContent = h ? 'Tampilkan penanda progres' : 'Sembunyikan penanda progres';
  });

  addEventListener('hashchange', () => show(false));
  show(true);
})();
