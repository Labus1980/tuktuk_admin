import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Tuk-Tuk</span>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') ? 'text-primary bg-primary-light' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Главная
            </Link>
            <Link
              to="/clients"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/clients') ? 'text-primary bg-primary-light' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              <UsersIcon className="h-5 w-5 mr-2" />
              Клиенты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 