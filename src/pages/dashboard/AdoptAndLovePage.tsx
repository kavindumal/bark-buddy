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
                    <DogCard name="Charlie" age="2 Years" breed="Golden Retriever" image="https://imgs.search.brave.com/IHHaIjNXMCaCTQhKFdMZbALGfhWEn1ZrV9dybFHQgcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY4LzkzLzc2/LzM2MF9GXzE2ODkz/NzY2OV9mbFhpZVgw/Vjh6dG1CV1laRUx5/SmZDSnBzMFJ5WVhC/My5qcGc" />
                    <DogCard name="Luna" age="1.5 Years" breed="Husky" image="https://imgs.search.brave.com/7WHHEuGufhv8g2bpjdLHRhou4ZOmFtb_f0UpecYZFe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/MDI1MzI4NC9waG90/by9zaWRlLXZpZXct/cG9ydHJhaXQtb2Yt/aHVza3ktZG9nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1W/bU11cXluWmt1TGJY/b1c2bnBHTlRrUjBy/UHlRM1RTdzN6N2VM/S3FjYlpzPQ" />
                    <DogCard name="Rocky" age="3 Years" breed="Beagle" image="https://imgs.search.brave.com/bsiunvxzX-_guiMUgXikxw_6LAWBRZXzwyqIO8BOT1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb2d0/aW1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMTIv/MjAyMy8wNy9HZXR0/eUltYWdlcy0xNDE2/MTAwNzE2LWUxNjkw/NzY5NjI4NjM5Lmpw/Zz93PTEwMjQ" />
                    <DogCard name="Bella" age="2 Years" breed="Poodle" image="https://imgs.search.brave.com/ekHbaUKnOBaffxmrQrG_ezVXxAwW5Mf-utG0QVYr_CA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzM1LzgyLzI0/LzM2MF9GXzMzNTgy/MjQ5OV9pbWNFVlhr/Y0Nqb3J1QVNpcVAw/Q0xwZ3MyZmlldzZq/VS5qcGc" />
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