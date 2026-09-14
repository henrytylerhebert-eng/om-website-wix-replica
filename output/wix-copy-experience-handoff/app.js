const menu = document.querySelector('.menu-button');
const tree = document.querySelector('.tree');
menu?.addEventListener('click', () => {
  const open = tree.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.tree__item').forEach((link) => link.addEventListener('click', () => {
  document.querySelectorAll('.tree__item').forEach((item) => item.classList.remove('active'));
  link.classList.add('active');
  tree.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.pin').forEach((pin) => pin.addEventListener('click', () => {
  const note = document.getElementById(pin.dataset.note);
  note?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  note?.focus?.();
}));
