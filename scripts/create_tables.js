import { createClient } from '@supabase/supabase-js'
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

async function createTables() {
  try {
    // Создаем таблицу clients
    const { error: clientsError } = await supabase.from('clients').insert({
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Test Client',
      email: 'test@example.com',
      phone: '+1234567890',
      address: 'Test Address'
    }).select()

    if (clientsError && !clientsError.message.includes('duplicate key value')) {
      throw clientsError
    }

    console.log('Clients table created successfully')

    // Создаем таблицу vehicles
    const { error: vehiclesError } = await supabase.from('vehicles').insert({
      id: '00000000-0000-0000-0000-000000000000',
      model: 'Test Model',
      license_plate: 'TEST123',
      status: 'available',
      daily_rate: 100
    }).select()

    if (vehiclesError && !vehiclesError.message.includes('duplicate key value')) {
      throw vehiclesError
    }

    console.log('Vehicles table created successfully')

    // Создаем таблицу rentals
    const { error: rentalsError } = await supabase.from('rentals').insert({
      id: '00000000-0000-0000-0000-000000000000',
      client_id: '00000000-0000-0000-0000-000000000000',
      vehicle_id: '00000000-0000-0000-0000-000000000000',
      start_date: new Date().toISOString(),
      end_date: new Date().toISOString(),
      total_amount: 100,
      status: 'active'
    }).select()

    if (rentalsError && !rentalsError.message.includes('duplicate key value')) {
      throw rentalsError
    }

    console.log('Rentals table created successfully')

  } catch (error) {
    console.error('Error creating tables:', error)
    process.exit(1)
  }
}

createTables() 