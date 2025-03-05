import { ArrowLeft, Car } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function RideDetails() {
  const navigate = useNavigate()

  return (
    <div className="bg-white max-w-md mx-auto h-screen">
      <div className="bg-[#7DD3F0] p-6 rounded-b-3xl">
        <button 
          onClick={() => navigate('/search')}
          className="text-white mb-4 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft />
        </button>
        <div className="flex justify-between items-center text-white">
          <div>
            <div className="text-2xl">16:30</div>
            <div className="text-sm">Pick up at Brussel</div>
          </div>
          <div className="text-2xl">21 €</div>
        </div>
        <div className="flex justify-between items-center text-white mt-4">
          <div>
            <div className="text-2xl">17:20</div>
            <div className="text-sm">Drop off at Gent-Sint</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Stephan</h3>
            <div className="text-sm text-gray-500">
              4.99 ★ (347 reviews)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <Car className="w-5 h-5" />
          <span>Big White Car</span>
        </div>

        <button className="w-full bg-slate-600 text-white py-4 rounded-full hover:bg-slate-700 transition-colors">
          Order Now
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          By clicking an "Order Now" button I agree with Terms and Policies of using Carpoolin
        </p>
      </div>
    </div>
  )
}
