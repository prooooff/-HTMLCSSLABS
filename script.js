'use strict';

const THEME_STORAGE_KEY = 'frontend-lab-1-theme';

const themeToggle = document.querySelector('#theme-toggle');
const actionButton = document.querySelector('#action-button');
const counterText = document.querySelector('#counter');

let clickCount = 0;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
  applyTheme(initialTheme);
}

function incrementCounter() {
  clickCount += 1;
  counterText.textContent = `Лічильник: ${clickCount}`;
}

themeToggle.addEventListener('click', toggleTheme);
actionButton.addEventListener('click', incrementCounter);

initTheme();
