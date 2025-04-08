import 'dotenv/config'
import { supabase } from '@/lib/supabase'

async function migrate() {
  try {
    // Создаем таблицу clients
    const { error: createTableError } = await supabase.from('clients').insert({
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Test',
      email: 'test@example.com',
      phone: '+1234567890'
    })

    if (createTableError?.code === '42P01') { // Таблица не существует
      const { error } = await supabase.sql`
        CREATE TABLE IF NOT EXISTS clients (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
        );

        -- Create function to update updated_at timestamp
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
          NEW.updated_at = TIMEZONE('utc'::text, NOW());
          RETURN NEW;
        END;
        $$ language 'plpgsql';

        -- Create trigger to automatically update updated_at
        DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
        CREATE TRIGGER update_clients_updated_at
          BEFORE UPDATE ON clients
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column();
      `

      if (error) {
        console.error('Ошибка при создании таблицы:', error)
        process.exit(1)
      }

      console.log('Таблица успешно создана')
    }
    
    console.log('Миграция успешно выполнена')
    process.exit(0)
  } catch (error) {
    console.error('Ошибка при выполнении миграции:', error)
    process.exit(1)
  }
}

migrate() 