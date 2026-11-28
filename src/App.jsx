import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/admin/AdminDashboard'
import OperatorDashboard from './pages/operator/OperatorDashboard'
import TraderDashboard from './pages/trader/TraderDashboard'
import MyLots from './pages/trader/MyLots'
import StorageBooking from './pages/trader/StorageBooking'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/operator" element={<OperatorDashboard />} />
        <Route path="/trader" element={<TraderDashboard />} />
        <Route path="/myLots" element={<MyLots />} />
        <Route path="/storageBookings" element={<StorageBooking />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App