import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPaw, FaHeart, FaSearch, FaDog, FaUsers, FaShieldAlt } from "react-icons/fa";

export default function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero Section */}
            <section className="text-center py-16 px-8 bg-white shadow-lg rounded-b-3xl">
                <h1 className="text-5xl font-extrabold text-indigo-900">
                    Welcome to <span className="text-yellow-500">Bark Buddy</span> 🐶
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Find your furry friend, report lost dogs, or sell/adopt responsibly!
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link
                        to="/dashboard/adopt"
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-600 transition"
                    >
                        <FaHeart className="inline-block mr-2" /> Adopt a Dog
                    </Link>
                    <Link
                        to="/dashboard/lostandfound"
                        className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        <FaSearch className="inline-block mr-2" /> Lost & Found
                    </Link>
                </div>
            </section>

            {/* Featured Dogs */}
            <section className="py-12 px-8">
                <h2 className="text-4xl font-bold text-center text-indigo-900">🐾 Featured Dogs for Adoption</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DogCard name="Buddy" age="2 Years" breed="Golden Retriever" image="https://source.unsplash.com/300x200/?goldenretriever" />
                    <DogCard name="Max" age="1.5 Years" breed="Labrador" image="https://source.unsplash.com/300x200/?labrador" />
                    <DogCard name="Bella" age="3 Years" breed="Beagle" image="https://source.unsplash.com/300x200/?beagle" />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white py-12 px-8 rounded-xl shadow-md mx-6 my-8">
                <h2 className="text-4xl font-bold text-center text-indigo-900">Why Choose Bark Buddy?</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard icon={<FaPaw />} title="Wide Adoption Choices" description="We provide a variety of breeds for adoption, ensuring every pet finds a home." />
                    <FeatureCard icon={<FaUsers />} title="Trusted Community" description="Verified adopters and sellers ensure safe transactions and adoptions." />
                    <FeatureCard icon={<FaShieldAlt />} title="Secure & Reliable" description="We prioritize the safety and security of every pet and owner in our platform." />
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-indigo-900 text-white mt-10">
                <p className="text-lg">🐶 Bark Buddy - Helping Dogs Find Homes 🏡</p>
                <div className="flex justify-center space-x-4 mt-3">
                    <a href="#" className="text-yellow-300 hover:text-yellow-400"><FaHeart size={24} /></a>
                    <a href="#" className="text-yellow-300 hover:text-yellow-400"><FaDog size={24} /></a>
                    <a href="#" className="text-yellow-300 hover:text-yellow-400"><FaPaw size={24} /></a>
                </div>
            </footer>
        </motion.div>
    );
}

// Reusable Dog Card Component
function DogCard({ name, age, breed, image }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-indigo-900">{name}</h3>
            <p className="text-gray-600">{breed} - {age}</p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                Adopt Me!
            </button>
        </div>
    );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-yellow-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl text-yellow-600 mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-indigo-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
