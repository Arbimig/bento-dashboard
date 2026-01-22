# Bento Board Test

Тестовое задание: Bento-Grid с Drag & Drop.

## Описание

Страница с bento-сеткой из 4 карточек (Map, Instagram, Note, YouTube) с возможностью перетаскивания. Layout сохраняется в localStorage.

## Функционал

- Сетка на 12 колонок
- Drag & Drop только за handle (белая круглая ручка в правом верхнем углу)
- Сетка перестраивается без наложений
- Сохранение и восстановление layout из localStorage
- Кнопка "Reset Layout" для сброса к начальному состоянию

## Стек

- React 19 + TypeScript
- Vite
- react-grid-layout v2
- react-router-dom (для роутинга /board)

## Запуск

1. Установить зависимости:
   ```bash
   npm install
   ```

2. Запустить dev сервер:
   ```bash
   npm run dev
   ```

3. Открыть http://localhost:5173/board

## Сборка

```bash
npm run build
```
