import { RefreshCw } from 'lucide-react'
import { useState } from 'react'

export default function SearchScreen() {
  const [selectedDate, setSelectedDate] = useState<'today' | 'tomorrow' | 'other'>('today')
  const [passengers, setPassengers] = useState(1)

  return (
    <div className="bg-[#7DD3F0] rounded-3xl p-6 max-w-md mx-auto">
      <h2 className="text-white text-2xl font-semibold mb-6">Where are you going?</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <label className="text-white text-sm">From</label>
          <input 
            type="text" 
            value="Brussels"
            className="w-full bg-transparent border-b border-white text-white placeholder-white"
          />
        </div>

        <div className="relative">
          <label className="text-white text-sm">To</label>
          <input 
            type="text" 
            value="Ghent"
            className="w-full bg-transparent border-b border-white text-white placeholder-white"
          />
        </div>

        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">
          <RefreshCw className="w-4 h-4 text-[#7DD3F0]" />
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Date</h3>
        <div className="flex gap-4">
          {['today', 'tomorrow', 'other'].map((date) => (
            <button 
              key={date}
              onClick={() => setSelectedDate(date as 'today' | 'tomorrow' | 'other')}
              className={`px-4 py-2 rounded-full ${
                selectedDate === date 
                  ? 'bg-white text-[#7DD3F0]' 
                  : 'text-white'
              }`}
            >
              {date.charAt(0).toUpperCase() + date.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Passengers</h3>
        <div className="flex gap-4">
          {[1,2,3,4].map(num => (
            <button 
              key={num}
              onClick={() => setPassengers(num)}
              className={`w-10 h-10 rounded-full ${
                passengers === num 
                  ? 'bg-white text-[#7DD3F0]' 
                  : 'border-2 border-white text-white'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full bg-slate-600 text-white py-4 rounded-full mt-8">
        Search
      </button>
    </div>
  )
}
