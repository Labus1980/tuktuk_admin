# Tuk-Tuk

Система управления арендой транспортных средств.

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS
- Supabase
- React Query
- Headless UI

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/tuk-tuk.git
cd tuk-tuk
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` на основе `.env.example` и заполните переменные окружения:
```bash
cp .env.example .env
```

4. Запустите проект:
```bash
npm run dev
```

## Сборка

Для сборки проекта выполните:
```bash
npm run build
```

## Деплой

Проект настроен для автоматического деплоя на Netlify. При пуше в main ветку происходит автоматическая сборка и деплой.

## Функциональность

- Управление клиентами
- Управление велосипедами
- Отслеживание аренд
- Управление платежами
- Аналитика и отчеты

## Требования

- Node.js 18+
- npm или yarn
- Аккаунт Supabase

## Структура проекта

```
tuk-tuk/
├── src/
│   ├── app/              # Страницы приложения
│   ├── components/       # React компоненты
│   ├── lib/             # Утилиты и конфигурация
│   └── types/           # TypeScript типы
├── supabase/
│   └── migrations/      # SQL миграции
├── public/              # Статические файлы
└── package.json         # Зависимости и скрипты
```

## Разработка

1. Создайте новую ветку для ваших изменений:
```bash
git checkout -b feature/your-feature-name
```

2. Внесите изменения и закоммитьте их:
```bash
git add .
git commit -m "Описание ваших изменений"
```

3. Отправьте изменения в репозиторий:
```bash
git push origin feature/your-feature-name
```

## Лицензия

MIT
