export interface Client {
  id: string
  name: string
  email?: string
  phone: string
  passport_number: string
  address: string
  deal_number?: string | null
  tariff?: string | null
  amo_deal_id?: string | null
  amo_client_id?: string
  telegram_id?: string | null
  avito_id?: string | null
  vk_id?: string
  rental_start_date?: string | null
  rental_end_date?: string | null
  rental_end_date_normal?: string
  payment_date?: string | null
  created_at?: string
  updated_at?: string
}

export interface Vehicle {
  id: string
  model: string
  license_plate: string
  status: 'available' | 'rented' | 'maintenance'
  daily_rate: number
  created_at: string
  updated_at: string
}

export interface Rental {
  id: string
  client_id: string
  vehicle_id: string
  start_date: string
  end_date: string
  total_amount: number
  status: 'active' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string
  client?: Client
  vehicle?: Vehicle
}

export interface Payment {
  id: string
  rental_id: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  payment_date: string
  created_at: string
  updated_at: string
}

export interface Analytics {
  id: string
  date: string
  total_rentals: number
  active_rentals: number
  revenue: number
  created_at: string
  updated_at: string
}

export interface Bike {
  id: string
  model: string
  license_plate: string
  status: 'available' | 'rented' | 'maintenance'
  daily_rate: number
  created_at: string
  updated_at: string
} 