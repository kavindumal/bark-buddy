import { motion } from "framer-motion";
import { FaFilter, FaHeart } from "react-icons/fa";

export default function AdoptPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero Section */}
            <section className="text-center py-16 px-8 bg-white shadow-lg rounded-b-3xl">
                <h1 className="text-5xl font-extrabold text-indigo-900">
                    Find Your <span className="text-yellow-500">Perfect Companion</span> 🐶
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Browse through adorable dogs and give them a loving home!
                </p>
            </section>

            {/* Filter Section */}
            <section className="py-6 px-8 flex justify-between items-center bg-yellow-100 shadow-md rounded-xl mx-6 mt-6">
                <h2 className="text-2xl font-bold text-indigo-900">Available Dogs for Adoption</h2>
                <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition">
                    <FaFilter className="mr-2" /> Filter Options
                </button>
            </section>

            {/* Dog Listings */}
            <section className="py-12 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DogCard name="Charlie" age="2 Years" breed="Golden Retriever" image="https://source.unsplash.com/300x200/?goldenretriever" />
                    <DogCard name="Luna" age="1.5 Years" breed="Husky" image="https://source.unsplash.com/300x200/?husky" />
                    <DogCard name="Rocky" age="3 Years" breed="Beagle" image="https://source.unsplash.com/300x200/?beagle" />
                    <DogCard name="Bella" age="2 Years" breed="Poodle" image="https://source.unsplash.com/300x200/?poodle" />
                    <DogCard name="Milo" age="4 Years" breed="Shiba Inu" image="https://source.unsplash.com/300x200/?shiba" />
                    <DogCard name="Cooper" age="1 Year" breed="Dachshund" image="https://source.unsplash.com/300x200/?dachshund" />
                </div>
            </section>
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
                <FaHeart className="inline-block mr-2" /> Adopt Me!
            </button>
        </div>
    );
}