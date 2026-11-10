/* ОСНОВНАЯ РАБОТА: реализуйте переключение темы без библиотеки.
 * "auto" означает отсутствие атрибута data-theme у <html>.
 * В таком случае тёмную тему применяет CSS media query.
 * Настройку нужно сохранять в localStorage (ключ "atlas-theme").
 */
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

function applyTheme(choice) {
  // TODO: если choice === 'auto' — root.removeAttribute('data-theme').
  // TODO: иначе — root.dataset.theme = choice.
  // TODO: синхронизируйте значение themeSelect.value.
}

// TODO: при загрузке прочитайте сохранённое значение из localStorage.
// TODO: допустимые значения: auto / light / dark; иначе используйте auto.
// TODO: обработайте событие change у themeSelect и сохраните настройку.
// Подсказка: если localStorage недоступен, оставьте интерфейс рабочим.

/* Обратная связь от кнопки — уже готова. */
demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});

/* САМОСТОЯТЕЛЬНАЯ РАБОТА: переключатель плотности и сохранение выбора. */
