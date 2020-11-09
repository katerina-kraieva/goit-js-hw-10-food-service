import './styles.css';

// Подключение шаблона меню
import menuItemsTemp from './templates/menu.hbs';
import menu from './menu.json';

const menuMarkup = menuItemsTemp(menu);

const menuContainer = document.querySelector('.js-menu');
menuContainer.innerHTML = menuMarkup;

// Изменение темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const themeToggle = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector("body");

themeToggle.addEventListener("change", onThemeToggleClick);
populateChooseTheme();

function onThemeToggleClick(evt) {
if (evt.target.checked) {
        bodyTheme.classList.remove(LIGHT);
        bodyTheme.classList.add(DARK);
        localStorage.setItem('Theme', DARK);
    } else {
        bodyTheme.classList.remove(DARK);
        bodyTheme.classList.add(LIGHT);
        localStorage.setItem('Theme', LIGHT);
    }
}
// Сохраняем положение переключателя
function populateChooseTheme() {
    const currentTheme = localStorage.getItem('Theme');

    if (currentTheme) {
        bodyTheme.classList.toggle(currentTheme);
    }

    if (currentTheme === DARK) {
        themeToggle.checked = true;
    }
}