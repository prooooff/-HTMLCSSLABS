# Frontend Lab 1 — Налаштування середовища розробки

Навчальний статичний web-проєкт для лабораторної роботи 1 з курсу фронтенд-розробки.
Демонструє налаштування локального середовища, інструменти якості коду та повний цикл
публікації через GitHub Pages і Vercel.

## Технології

- HTML — структура і семантика сторінки
- CSS — responsive layout та перемикання теми (light/dark)
- JavaScript — мінімальна інтерактивність (лічильник, theme switch)

## Локальний запуск

```bash
# встановити залежності для інструментів якості коду
npm install

# запустити локальний сервер (наприклад, через Live Preview у VS Code)
# або відкрити index.html у браузері
```

Для локального перегляду з live reload використовується розширення VS Code
**Live Preview** (ms-vscode.live-server).

## Перевірка коду

```bash
npm run format        # Prettier: форматування
npm run format:check  # Prettier: лише перевірка
npm run lint          # ESLint: статичний аналіз
```

## Посилання на деплой

- GitHub Pages: https://prooooff.github.io/-HTMLCSSLABS/
- Vercel: https://htmlcsslabs.vercel.app/
