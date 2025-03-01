import { useState } from "react";
import { motion } from "framer-motion";
import { FaKey, FaUser, FaTrash, FaSignOutAlt } from "react-icons/fa";

export default function SettingsPage() {
    const [userDetails, setUserDetails] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Buyer",
    });

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        // Add logic to update password (e.g., API call)
        alert("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            // Add logic to delete account (e.g., API call)
            alert("Account deleted successfully!");
        }
    };

    const handleLogout = () => {
        // Add logic to log out (e.g., clear JWT token and redirect)
        alert("Logged out successfully!");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
        >
            <h1 className="text-4xl font-bold text-indigo-900 text-center">⚙️ Settings</h1>

            {/* User Details Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 flex items-center">
                    <FaUser className="mr-2" /> User Details
                </h2>
                <div className="mt-4 space-y-4">
                    <p><span className="font-semibold">Name:</span> {userDetails.name}</p>
                    <p><span className="font-semibold">Email:</span> {userDetails.email}</p>
                    <p><span className="font-semibold">Role:</span> {userDetails.role}</p>
                </div>
            </div>

            {/* Change Password Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 flex items-center">
                    <FaKey className="mr-2" /> Change Password
                </h2>
                <div className="mt-4 space-y-4">
                    <input
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        onClick={handleChangePassword}
                        className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                    >
                        Change Password
                    </button>
                </div>
            </div>

            {/* Delete Account Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 flex items-center">
                    <FaTrash className="mr-2" /> Delete Account
                </h2>
                <p className="mt-4 text-gray-600">
                    Deleting your account will permanently remove all your data. This action cannot be undone.
                </p>
                <button
                    onClick={handleDeleteAccount}
                    className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                    Delete Account
                </button>
            </div>

            {/* Logout Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 flex items-center">
                    <FaSignOutAlt className="mr-2" /> Logout
                </h2>
                <p className="mt-4 text-gray-600">
                    Log out of your account. You can log back in anytime.
                </p>
                <button
                    onClick={handleLogout}
                    className="mt-4 w-full bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                    Logout
                </button>
            </div>
        </motion.div>
    );
}