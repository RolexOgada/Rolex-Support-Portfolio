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
const experienceDialog = document.getElementById('experienceDialog');
const openExperienceButton = document.getElementById('openExperience');
const closeExperienceButton = document.getElementById('closeExperience');

openExperienceButton.addEventListener('click', () => experienceDialog.showModal());
closeExperienceButton.addEventListener('click', () => experienceDialog.close());
document.addEventListener('click', (event) => {
  if (openExperienceButton.contains(event.target) || !experienceDialog.open) return;
  const bounds = experienceDialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) experienceDialog.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && experienceDialog.open) experienceDialog.close();
});

document.getElementById('year').textContent = new Date().getFullYear();
