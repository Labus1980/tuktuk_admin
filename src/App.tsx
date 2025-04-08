import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ClientsList from './components/clients/ClientsList'
import VehiclesList from './components/vehicles/VehiclesList'
import fon2 from './fon2.png'
import logo2 from './assets/logo2.svg'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fon2})` }}>
          <nav className="bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-24">
                <div className="flex-shrink-0">
                  <img className="h-20 w-auto" src={logo2} alt="TukTuk Logo" />
                </div>
                <div className="flex space-x-6">
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium"
                  >
                    Главная
                  </Link>
                  <Link
                    to="/clients"
                    className="text-gray-800 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium"
                  >
                    Клиенты
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-[95%] mx-auto py-6 px-4">
            <Routes>
              <Route path="/" element={<div>Главная страница</div>} />
              <Route path="/clients" element={<ClientsList />} />
              <Route path="/vehicles" element={<VehiclesList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  )
} 