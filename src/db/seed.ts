import 'dotenv/config'
import { supabase } from '@/lib/supabase'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function seed() {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8')
    
    // Очищаем таблицу
    const { error: clearError } = await supabase
      .from('clients')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')
    
    if (clearError) {
      console.error('Ошибка при очистке таблицы:', clearError)
      process.exit(1)
    }

    // Добавляем тестовые данные
    const testData = [
      {
        name: 'Иван Петров',
        email: 'ivan@example.com',
        phone: '+7 (999) 123-45-67'
      },
      {
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        phone: '+7 (999) 234-56-78'
      },
      {
        name: 'Алексей Иванов',
        email: 'alex@example.com',
        phone: '+7 (999) 345-67-89'
      },
      {
        name: 'Елена Смирнова',
        email: 'elena@example.com',
        phone: '+7 (999) 456-78-90'
      },
      {
        name: 'Дмитрий Козлов',
        email: 'dmitry@example.com',
        phone: '+7 (999) 567-89-01'
      }
    ]

    const { error: insertError } = await supabase
      .from('clients')
      .insert(testData)

    if (insertError) {
      console.error('Ошибка при добавлении тестовых данных:', insertError)
      process.exit(1)
    }
    
    console.log('Тестовые данные успешно добавлены')
    process.exit(0)
  } catch (error) {
    console.error('Ошибка при выполнении сидирования:', error)
    process.exit(1)
  }
}

seed() 