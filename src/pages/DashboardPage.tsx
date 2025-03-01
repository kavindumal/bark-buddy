import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaHome, FaDog, FaMapMarkerAlt, FaClipboardList, FaCog, FaHeart } from "react-icons/fa";

export default function DashboardPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-400"
        >
            {/* Sidebar - Fixed Navigation */}
            <div className="w-64 bg-indigo-900 text-white p-6 flex flex-col space-y-6 shadow-lg fixed h-full">
                <h2 className="text-3xl font-extrabold text-center text-yellow-300">🐶 Bark Buddy</h2>
                <nav className="flex flex-col space-y-2 flex-grow">
                    <NavItem icon={<FaHome />} text="Dashboard" path="/dashboard" />
                    <NavItem icon={<FaHeart />} text="Adopt a Friend" path="/dashboard/adopt" />
                    <NavItem icon={<FaMapMarkerAlt />} text="Lost & Found" path="/dashboard/lostandfound" />
                    <NavItem icon={<FaDog />} text="My Dogs" path="/dashboard/mydogs" />
                    <NavItem icon={<FaClipboardList />} text="Listings & Requests" path="/dashboard/listings" />
                </nav>
                <div className="mt-auto">
                    <NavItem icon={<FaCog />} text="Settings" path="/dashboard/settings" />
                </div>
            </div>

            {/* Main Content Area - Takes Full Space After Sidebar */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-transparent p-8 rounded-xl shadow-xl ml-64 h-full overflow-auto"
            >
                <Outlet /> {/* This will render the selected page */}
            </motion.div>
        </motion.div>
    );
}

function NavItem({ icon, text, path }) {
    const location = useLocation(); // Get current route
    const isActive = location.pathname === path;

    return (
        <Link
            to={path}
            className={`flex items-center space-x-3 p-3 text-lg font-medium rounded-lg transition duration-300 ${
                isActive ? "bg-yellow-400 text-indigo-900 font-bold" : "hover:bg-indigo-700 text-white"
            }`}
        >
            <span className={`${isActive ? "text-indigo-900" : "text-yellow-300"} text-xl`}>{icon}</span>
            <span>{text}</span>
        </Link>
    );
}
