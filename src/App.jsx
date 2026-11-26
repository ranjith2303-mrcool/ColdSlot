import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import OperatorDashboard from './pages/operator/OperatorDashboard'
import TraderDashboard from './pages/trader/TraderDashboard'
import Home from './Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login"/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/OperatorDashboard" element={<OperatorDashboard/>}/>
        <Route path="TraderDashboard" element={<TraderDashboard/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App