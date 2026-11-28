import { Link, Outlet } from "react-router-dom";
function TraderLayout() {
    return ( 
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-900 p-4 text-white">
                <h1 className="text-2xl front-bold">Cold Slot Trader Layout</h1>
            </header>
            <nav className="flex flex-warp gap-6 bg-white p-4 shadow">
                <Link to="TraderDashboard" className="text-blue-700 hover:underline">Trader Dashboard </Link>
                <Link to="StorageBooking" className="text-blue-700 hover:underline">Storage Booking Layout </Link>
                <Link to="MyLots" className="text-blue-700 hover:underline">My Lots Layout</Link>
                <Link to="WithdrwalRequest" className="text-blue-700 hover:underline">Withdrwal Request Layout </Link>
                <Link to="MyBills" className="text-blue-700 hover:underline">My Bills Layout </Link>
            </nav>
            <main className="p-6"><Outlet /></main>
        </div>
     );
}

export default TraderLayout;