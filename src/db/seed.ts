import { supabase } from '../lib/supabase'

async function seed() {
  try {
    const { error } = await supabase.from('clients').insert([
      {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '+0987654321'
      }
    ])

    if (error) {
      throw error
    }

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error running seed:', error)
    process.exit(1)
  }
}

seed() 