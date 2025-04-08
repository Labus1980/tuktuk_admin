import { supabase } from '../lib/supabase'

async function migrate() {
  try {
    const { error } = await supabase.from('migrations').insert([{ name: '001_create_clients_table' }])
    
    if (error) {
      throw error
    }
    
    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Error running migration:', error)
    process.exit(1)
  }
}

migrate() 