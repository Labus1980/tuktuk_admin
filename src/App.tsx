import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ClientsList from './components/clients/ClientsList'
import VehiclesList from './components/vehicles/VehiclesList'
import { HomeIcon, UsersIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">Tuk-Tuk</span>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Главная
                </Link>
                <Link
                  to="/clients"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  <UsersIcon className="h-5 w-5 mr-2" />
                  Клиенты
                </Link>
                <Link
                  to="/vehicles"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  <TruckIcon className="h-5 w-5 mr-2" />
                  Транспорт
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<div className="text-center py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Добро пожаловать в Tuk-Tuk</h1>
                <p className="text-xl text-gray-600">Система управления арендой транспортных средств</p>
              </div>} />
              <Route path="/clients" element={<ClientsList />} />
              <Route path="/vehicles" element={<VehiclesList />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
} 