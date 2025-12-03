import { useState } from 'react'
import api from './api/axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      const response = await api.get('/test/')
      setMessage(response.data.message)
    } catch (error) {
      setMessage('Error: ' + (error.message || 'Connection failed'))
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Event Management System
        </h1>
        <button
          onClick={testConnection}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          {loading ? 'Testing...' : 'Test Backend Connection'}
        </button>
        {message && (
          <p className="mt-6 text-xl text-green-400">{message}</p>
        )}
      </div>
    </div>
  )
}

export default App
