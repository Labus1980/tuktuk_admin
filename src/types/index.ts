export interface Client {
  id: string
  name: string
  email: string
  phone: string
  created_at: string
  updated_at: string
}

export interface Bike {
  id: string
  number: string
  status: 'available' | 'rented' | 'maintenance'
  last_maintenance: string
  created_at: string
  updated_at: string
}

export interface Rental {
  id: string
  client_id: string
  bike_id: string
  start_date: string
  end_date: string | null
  status: 'active' | 'completed' | 'cancelled'
  tariff: string
  created_at: string
  updated_at: string
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