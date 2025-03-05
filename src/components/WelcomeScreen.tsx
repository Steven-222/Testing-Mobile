import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-8">
      <div className="w-full max-w-md text-center">
        <img 
          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500"
          alt="Car illustration"
          className="w-64 h-64 mx-auto mb-8 object-cover"
        />
        <h1 className="text-3xl font-bold mb-2">CarPoolin</h1>
        <p className="text-gray-600 mb-8">Drive & Save Money</p>
        <button 
          onClick={() => navigate('/search')}
          className="bg-slate-600 text-white rounded-full p-4 hover:bg-slate-700 transition-colors"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
