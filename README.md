# Tuk-Tuk - Система управления арендой электровелосипедов

Административная панель для управления арендой электровелосипедов, построенная с использованием Next.js и Supabase.

## Функциональность

- Управление клиентами
- Управление велосипедами
- Отслеживание аренд
- Управление платежами
- Аналитика и отчеты

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- React Query
- Recharts

## Требования

- Node.js 18+
- npm или yarn
- Аккаунт Supabase

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/tuk-tuk.git
cd tuk-tuk
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
```

3. Создайте файл `.env.local` и добавьте необходимые переменные окружения:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Запустите миграции базы данных в Supabase:
   - Создайте новый проект в Supabase
   - Скопируйте содержимое файла `supabase/migrations/00000000000000_initial_schema.sql`
   - Выполните SQL-скрипт в SQL-редакторе Supabase

5. Запустите проект:
```bash
npm run dev
# или
yarn dev
```

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
