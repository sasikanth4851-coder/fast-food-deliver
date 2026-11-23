// Spice & Soul interactions
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Filter menu cards by category.
const tabs = document.querySelectorAll('.tab');
const foodCards = document.querySelectorAll('.food-card');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    foodCards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

// Copy the sample offer code.
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
document.getElementById('copyCode').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('WELCOME20');
    showToast('WELCOME20 copied to clipboard');
  } catch {
    showToast('Use offer code: WELCOME20');
  }
});

// Demo newsletter form: front-end only, no mailing list is connected.
document.getElementById('newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  document.getElementById('formMessage').textContent =
    'Thanks for your interest! Connect this form to an email service to collect sign-ups.';
  email.value = '';
});

document.getElementById('year').textContent = new Date().getFullYear();
