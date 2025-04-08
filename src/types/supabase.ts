export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          name: string
          email: string | null
          phone: string | null
          address: string | null
          passport_number: string | null
          driver_license_number: string | null
          deal_number: string | null
          tariff: string | null
          amo_deal_id: string | null
          amo_client_id: string | null
          telegram_id: string | null
          avito_id: string | null
          vk_id: string | null
          rental_start_date: string | null
          rental_end_date: string | null
          rental_end_date_normal: string | null
          payment_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email?: string | null
          phone?: string | null
          address?: string | null
          passport_number?: string | null
          driver_license_number?: string | null
          deal_number?: string | null
          tariff?: string | null
          amo_deal_id?: string | null
          amo_client_id?: string | null
          telegram_id?: string | null
          avito_id?: string | null
          vk_id?: string | null
          rental_start_date?: string | null
          rental_end_date?: string | null
          rental_end_date_normal?: string | null
          payment_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string | null
          phone?: string | null
          address?: string | null
          passport_number?: string | null
          driver_license_number?: string | null
          deal_number?: string | null
          tariff?: string | null
          amo_deal_id?: string | null
          amo_client_id?: string | null
          telegram_id?: string | null
          avito_id?: string | null
          vk_id?: string | null
          rental_start_date?: string | null
          rental_end_date?: string | null
          rental_end_date_normal?: string | null
          payment_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          model: string
          license_plate: string
          vin: string | null
          color: string | null
          status: string
          daily_rate: number
          total_cost: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          model: string
          license_plate: string
          vin?: string | null
          color?: string | null
          status?: string
          daily_rate: number
          total_cost?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          model?: string
          license_plate?: string
          vin?: string | null
          color?: string | null
          status?: string
          daily_rate?: number
          total_cost?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      rentals: {
        Row: {
          id: string
          client_id: string
          vehicle_id: string
          start_date: string
          end_date: string
          deposit_amount: number
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          vehicle_id: string
          start_date: string
          end_date: string
          deposit_amount: number
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          vehicle_id?: string
          start_date?: string
          end_date?: string
          deposit_amount?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 