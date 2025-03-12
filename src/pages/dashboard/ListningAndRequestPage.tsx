import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

export default function ListingsAndRequestsPage() {
    const [listings, setListings] = useState([
        {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            age: "2 Years",
            price: "$500",
            status: "Available",
            type: "Sale",
            image: "https://imgs.search.brave.com/rZP3gi5-TLqlva_8AA7rj5EQG8IF5CpSqaYWvlb8Dvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYy/MzEzNDMwNi9waG90/by9iZWF1dGlmdWwt/Z29sZGVuLXJldHJp/ZXZlci1kb2ctaW4t/dGhlLXBhcmsuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN3/WFMyYTRqUmp3Uk9B/SngtT0VnYVppbVFw/b3lhVkhBV3BBTVVf/akNZbzg9",
        },
        {
            id: 2,
            name: "Max",
            breed: "Labrador",
            age: "1.5 Years",
            price: "Free",
            status: "Pending Adoption",
            type: "Adoption",
            image: "https://imgs.search.brave.com/9kmOZ27HNPWlNgiFd_pNZVhUllsD7qPpUihyyt59pZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMzU0/NGxhMXU4ZGp6YS5j/bG91ZGZyb250Lm5l/dC9BUEhJL0Jsb2cv/MjAyMy9yZXNvdXJj/ZXMvTGFicmFkb3Iu/anBn",
        },
    ]);

    const [requests, setRequests] = useState([
        {
            id: 1,
            dogName: "Buddy",
            requesterName: "Alice Smith",
            requesterEmail: "alice@example.com",
            status: "Pending",
        },
        {
            id: 2,
            dogName: "Max",
            requesterName: "Bob Johnson",
            requesterEmail: "bob@example.com",
            status: "Approved",
        },
    ]);

    const handleDeleteListing = (id) => {
        setListings(listings.filter((listing) => listing.id !== id));
    };

    const handleEditListing = (id) => {
        // Add logic to edit listing (e.g., open a modal or navigate to an edit page)
        alert(`Edit listing with ID: ${id}`);
    };

    const handleApproveRequest = (id) => {
        setRequests(
            requests.map((request) =>
                request.id === id ? { ...request, status: "Approved" } : request
            )
        );
    };

    const handleRejectRequest = (id) => {
        setRequests(
            requests.map((request) =>
                request.id === id ? { ...request, status: "Rejected" } : request
            )
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
        >
            <h1 className="text-4xl font-bold text-indigo-900 text-center">📋 Listings & Requests</h1>

            {/* My Listings Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900">My Listings</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {listings.map((listing) => (
                        <div
                            key={listing.id}
                            className="bg-white p-6 rounded-lg shadow-lg text-center relative"
                        >
                            <img
                                src={listing.image}
                                alt={listing.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-indigo-900">{listing.name}</h3>
                            <p className="text-gray-600">
                                {listing.breed} - {listing.age}
                            </p>
                            <p className="text-gray-600">{listing.price}</p>
                            <p
                                className={`mt-2 px-4 py-1 text-white rounded-lg ${
                                    listing.status === "Available"
                                        ? "bg-green-500"
                                        : "bg-yellow-500"
                                }`}
                            >
                                {listing.status}
                            </p>
                            <div className="mt-4 flex justify-center space-x-4">
                                <button
                                    onClick={() => handleEditListing(listing.id)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                                >
                                    <FaEdit className="inline-block mr-2" /> Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteListing(listing.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                                >
                                    <FaTrash className="inline-block mr-2" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Adoption Requests Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900">Adoption Requests</h2>
                <div className="mt-4 space-y-4">
                    {requests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-indigo-900">
                                    {request.dogName}
                                </h3>
                                <p className="text-gray-600">
                                    Requested by: {request.requesterName} ({request.requesterEmail})
                                </p>
                                <p
                                    className={`mt-2 px-4 py-1 text-white rounded-lg ${
                                        request.status === "Pending"
                                            ? "bg-yellow-500"
                                            : request.status === "Approved"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                    }`}
                                >
                                    {request.status}
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0 flex space-x-4">
                                {request.status === "Pending" && (
                                    <>
                                        <button
                                            onClick={() => handleApproveRequest(request.id)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                                        >
                                            <FaCheck className="inline-block mr-2" /> Approve
                                        </button>
                                        <button
                                            onClick={() => handleRejectRequest(request.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                                        >
                                            <FaTimes className="inline-block mr-2" /> Reject
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}