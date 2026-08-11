// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mobileNav');

btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  nav.hidden = open;
});

nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', 'false');
    nav.hidden = true;
  })
);

// Close menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    btn.setAttribute('aria-expanded', 'false');
    nav.hidden = true;
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
