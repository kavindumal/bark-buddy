import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaDog } from "react-icons/fa";

export default function LostAndFoundPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero Section */}
            <section className="text-center py-16 px-8 bg-white shadow-lg rounded-b-3xl">
                <h1 className="text-5xl font-extrabold text-indigo-900">
                    Lost & Found <span className="text-yellow-500">Dogs</span> 🐶🔍
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Report lost dogs, help reunite pets with owners, or check for found dogs.
                </p>
                <div className="mt-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by location or name..."
                        className="p-3 rounded-l-lg border border-gray-300 w-1/2"
                    />
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-yellow-600 transition">
                        <FaSearch />
                    </button>
                </div>
            </section>

            {/* Lost & Found Dogs Grid */}
            <section className="py-12 px-8">
                <h2 className="text-4xl font-bold text-center text-indigo-900">📍 Reported Dogs</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <LostFoundCard name="Charlie" status="Lost" location="Central Park" image="https://imgs.search.brave.com/xG517hQIgHVZWs4-GnHfQzSIqFQNj20htOOByflmLa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZG9yYWJsZS1zaGli/YS1pbnUtZG9nXzIz/LTIxNDg5OTE4Njcu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" />
                    <LostFoundCard name="Luna" status="Found" location="Downtown" image="https://imgs.search.brave.com/ug2ay_GfGrXvy-Q1NSL7YviGhO6DHgh7hLC2L6WAeM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODM0/NTk5OTA4L3Bob3Rv/L3RveS1wb29kbGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTQ5am5yWnloZXdG/SmVqRVRiNnk2T3Zv/cUljM3FGU1k4bzE0/TmU4TFlaSms9" />
                    <LostFoundCard name="Rocky" status="Lost" location="Westside Street" image="https://imgs.search.brave.com/tptpJJ56EUsw6Dh0tS23MdVi75ipBGsda3vseZDT9sE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/MDExMzM1L3Bob3Rv/L2JlYWdsZS1wdXBw/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9R0xCRnJZRFY5/a0lFaC12MlBIcHZa/ODRZNmFqczU4VXhr/WFZEVmNrMmczUT0" />
                </div>
            </section>
        </motion.div>
    );
}

// Reusable Lost & Found Card Component
function LostFoundCard({ name, status, location, image }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-indigo-900">{name}</h3>
            <p className="text-gray-600 flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" /> {location}
            </p>
            <span className={`inline-block mt-4 px-4 py-2 rounded-lg font-semibold ${status === "Lost" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
                {status}
            </span>
        </div>
    );
}
