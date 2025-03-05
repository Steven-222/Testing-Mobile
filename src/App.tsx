import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import SearchScreen from './components/SearchScreen'
import RideDetails from './components/RideDetails'

function App() {
  return (
    <div className="min-h-screen max-w-md mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/ride" element={<RideDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
