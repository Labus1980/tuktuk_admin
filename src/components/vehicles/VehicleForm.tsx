import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { Vehicle } from '@/types'

interface VehicleFormProps {
  vehicle?: Vehicle
  onClose: () => void
}

export default function VehicleForm({ vehicle, onClose }: VehicleFormProps) {
  const [model, setModel] = useState(vehicle?.model || '')
  const [licensePlate, setLicensePlate] = useState(vehicle?.license_plate || '')
  const [dailyRate, setDailyRate] = useState(vehicle?.daily_rate || 0)
  const [status, setStatus] = useState<'available' | 'rented' | 'maintenance'>(vehicle?.status || 'available')

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Partial<Vehicle>) => {
      if (vehicle) {
        const { error } = await supabase
          .from('vehicles')
          .update(data)
          .eq('id', vehicle.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('vehicles')
          .insert([data])
        if (error) throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] })
      onClose()
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({
      model,
      license_plate: licensePlate,
      daily_rate: dailyRate,
      status,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Модель
        </label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">
          Номерной знак
        </label>
        <input
          type="text"
          id="licensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="dailyRate" className="block text-sm font-medium text-gray-700">
          Стоимость за день
        </label>
        <input
          type="number"
          id="dailyRate"
          value={dailyRate}
          onChange={(e) => setDailyRate(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Статус
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Vehicle['status'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        >
          <option value="available">Доступен</option>
          <option value="rented">Арендован</option>
          <option value="maintenance">На обслуживании</option>
        </select>
      </div>

      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm disabled:opacity-50"
        >
          {isPending ? 'Сохранение...' : vehicle ? 'Сохранить' : 'Добавить'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
        >
          Отмена
        </button>
      </div>
    </form>
  )
} 