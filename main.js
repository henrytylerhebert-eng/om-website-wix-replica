// OM Wix replica — shared behaviors

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

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

// Hero JTBD rotator — Destin §6. Statements are DRAFTS pending the companion file.
// "want to get in front of investors" is Destin's own example (§15); others are placeholders.
const rotator = document.getElementById('jtbd-rotator');
if (rotator) {
  const statements = [
    'want to get in front of investors.',
    'want to know if anyone will actually buy.',
    'want real customers, not more advice.',
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
