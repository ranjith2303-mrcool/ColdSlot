import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import OperatorDashboard from './pages/operator/OperatorDashboard'
import TraderDashboard from './pages/trader/TraderDashboard'
import Home from './home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/operator" element={<OperatorDashboard/>}/>
        <Route path="/trader" element={<TraderDashboard/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;