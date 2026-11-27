import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return ( 
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-900 p-4 text-white">
                <h1 className="text-2x1 front-bold">ColdSlot Admin Layout</h1>
            </header>
            <nav className="flex gap-6 bg-white p-4 shadow">
                <Link to="AdminDashboard" className="text-blue-700 hover:uderline">Admin Dashboard</Link>
                <Link to="Settings" className="text-blue-700 hover:underline">Settings</Link>
                <Link to="UserDetails" className="text-blue-700 hover:underline">User Details</Link>
                <Link to="Lotsoverview" className="text-blue-700 hover:undeline">Lots Overview</Link>
            </nav>
            <main classNmae="p-6"><Outlet /></main>
        </div>
     );
}
export default AdminLayout ;