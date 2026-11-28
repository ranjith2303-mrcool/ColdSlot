import { Link, Outlet } from "react-router-dom";
function OpreatorLayout () {
    return ( 
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-900 p4 text-white">
                <h1 className="text-2x1 front-bold">ColdSlot Operator Layout</h1>
            </header>
            <nav className="flex flex-warp gap-6 bg-white p-4 shadow">
                <Link to="OperatorDashboard" className="text-blue-700 hover:underline">OperatorDashboard Layout</Link>
                <Link to="StorageRequests" className="text-blue-700 hover:underline">Storage Requests</Link>
                <Link to="Inventory" className="text-blue-700 hover:underline">Inventory</Link>
                <Link to="ExportWithdrwal" className="text-blue-700 hover:underline">Export/Withdrwal Layout</Link>
            </nav>
            <main className="p-6"><Outlet /></main>
        </div>
     );
}

export default OpreatorLayout;