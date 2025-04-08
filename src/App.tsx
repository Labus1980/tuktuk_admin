import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './components/Navigation'
import ClientsList from './components/clients/ClientsList'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ClientsList />} />
              <Route path="/clients" element={<ClientsList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  )
} 