import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Загружаем переменные окружения
dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

// Создаем клиент Supabase с правильными учетными данными
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function applyMigrations() {
  const migrationsDir = path.join(process.cwd(), 'supabase', 'migrations')
  
  // Проверяем существование директории
  if (!fs.existsSync(migrationsDir)) {
    console.error(`Migrations directory not found: ${migrationsDir}`)
    process.exit(1)
  }
  
  const files = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort()

  if (files.length === 0) {
    console.error('No migration files found')
    process.exit(1)
  }

  console.log(`Found ${files.length} migration files`)

  for (const file of files) {
    console.log(`Applying migration: ${file}`)
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8')
    
    try {
      // Выполняем SQL-запрос напрямую через REST API
      const { error } = await supabase.rpc('exec_sql', { sql })
      if (error) throw error
      console.log(`Successfully applied migration: ${file}`)
    } catch (error) {
      console.error(`Error applying migration ${file}:`, error)
      process.exit(1)
    }
  }
  
  console.log('All migrations applied successfully')
}

applyMigrations() 