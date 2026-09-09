// OM Wix replica — shared behaviors

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Nav dropdown (e.g. Ecosystem > Community/Events/Talent)
document.querySelectorAll('.nav-dropdown-toggle').forEach((btn) => {
  const dropdown = btn.closest('.nav-dropdown');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll('.nav-dropdown.open').forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Mark current page in nav
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});

// Mentor directory filter
const filterRow = document.querySelector('.filter-row');
if (filterRow) {
  filterRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.mentor-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
}

// Hero JTBD rotator — approved copy per Update 01 (Homepage hero rotation).
// Respects prefers-reduced-motion: if set, the first approved line is shown
// statically and the rotation/fade never starts.
const rotator = document.getElementById('jtbd-rotator');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (rotator && !prefersReducedMotion) {
  const statements = [
    'want experienced guidance and advice.',
    'want to meet and build relationships with other founders.',
    'want clearer insight into what they\'re missing.',
    'want to build real connections with investors.',
    'want to get farther, faster.',
  ];
  let i = 0;
  setInterval(() => {
    rotator.classList.add('fading');
    setTimeout(() => {
      i = (i + 1) % statements.length;
      rotator.textContent = statements[i];
      rotator.classList.remove('fading');
    }, 350);
  }, 4000);
}

// Toggle internal claim flags with "c" key (review aid)
document.addEventListener('keydown', (e) => {
  if (e.key === 'c' && !/input|textarea|select/i.test(e.target.tagName)) {
    document.body.classList.toggle('hide-flags');
  }
});

// Consent-gated CTA analytics — same fail-safe pattern as clarity-check.js /
// ANALYTICS-CONSENT-GATING-SPEC.md. Nothing fires until a real sitewide
// consent banner sets localStorage 'om_consent' = 'granted'.
function hasAnalyticsConsent() {
  try { return localStorage.getItem('om_consent') === 'granted'; }
  catch (e) { return false; }
}
document.querySelectorAll('[data-analytics]').forEach((el) => {
  el.addEventListener('click', () => {
    if (!hasAnalyticsConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: el.dataset.analytics });
  });
});
