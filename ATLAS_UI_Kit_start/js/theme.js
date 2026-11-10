const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');
const densitySelect = document.querySelector('#density-select');

function applyTheme(choice) {
  if (choice === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.dataset.theme = choice;
  }
  themeSelect.value = choice;
}

function applyDensity(choice) {
  if (choice === 'normal') {
    root.removeAttribute('data-density');
  } else {
    root.dataset.density = choice;
  }
  densitySelect.value = choice;
}

let savedTheme = 'auto';
try {
  savedTheme = localStorage.getItem('atlas-theme') || 'auto';
} catch (e) {}
if (!['auto', 'light', 'dark'].includes(savedTheme)) savedTheme = 'auto';
applyTheme(savedTheme);

let savedDensity = 'normal';
try {
  savedDensity = localStorage.getItem('atlas-density') || 'normal';
} catch (e) {}
if (!['normal', 'compact'].includes(savedDensity)) savedDensity = 'normal';
applyDensity(savedDensity);

themeSelect.addEventListener('change', (e) => {
  applyTheme(e.target.value);
  try { localStorage.setItem('atlas-theme', e.target.value); } catch (err) {}
});

densitySelect.addEventListener('change', (e) => {
  applyDensity(e.target.value);
  try { localStorage.setItem('atlas-density', e.target.value); } catch (err) {}
});

demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});
