import { useState } from 'react'
import Navbar from './compponents/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import Cars from './pages/Cars'
import MyBooking from './pages/MyBooking'
import Footer from './compponents/Footer'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetail />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App