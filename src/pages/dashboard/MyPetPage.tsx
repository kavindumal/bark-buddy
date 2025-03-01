import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaExclamationTriangle } from "react-icons/fa";

export default function MyPetPage() {
    const [dogs, setDogs] = useState([
        { id: 1, name: "Buddy", breed: "Golden Retriever", age: "2 Years", status: "Safe", image: "https://source.unsplash.com/300x200/?goldenretriever" },
        { id: 2, name: "Max", breed: "Labrador", age: "1.5 Years", status: "Safe", image: "https://source.unsplash.com/300x200/?labrador" },
    ]);

    const [newDog, setNewDog] = useState({ name: "", breed: "", age: "", image: "" });

    const addDog = () => {
        if (!newDog.name || !newDog.breed || !newDog.age || !newDog.image) return;
        setDogs([...dogs, { ...newDog, id: Date.now(), status: "Safe" }]);
        setNewDog({ name: "", breed: "", age: "", image: "" });
    };

    const reportMissing = (id) => {
        setDogs(dogs.map(dog => dog.id === id ? { ...dog, status: "Missing" } : dog));
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
            <h1 className="text-4xl font-bold text-indigo-900 text-center">🐾 My Dogs</h1>

            {/* Add New Dog Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-900">Add a New Dog</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" placeholder="Dog Name" value={newDog.name} onChange={(e) => setNewDog({ ...newDog, name: e.target.value })} className="p-2 border rounded" />
                    <input type="text" placeholder="Breed" value={newDog.breed} onChange={(e) => setNewDog({ ...newDog, breed: e.target.value })} className="p-2 border rounded" />
                    <input type="text" placeholder="Age" value={newDog.age} onChange={(e) => setNewDog({ ...newDog, age: e.target.value })} className="p-2 border rounded" />
                    <input type="text" placeholder="Image URL" value={newDog.image} onChange={(e) => setNewDog({ ...newDog, image: e.target.value })} className="p-2 border rounded" />
                </div>
                <button onClick={addDog} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    <FaPlus className="inline-block mr-2" /> Add Dog
                </button>
            </div>

            {/* Display My Dogs */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {dogs.map(dog => (
                    <div key={dog.id} className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                        <img src={dog.image} alt={dog.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-indigo-900">{dog.name}</h3>
                        <p className="text-gray-600">{dog.breed} - {dog.age}</p>
                        <p className={`mt-2 px-4 py-1 text-white rounded-lg ${dog.status === "Missing" ? "bg-red-500" : "bg-green-500"}`}>
                            {dog.status}
                        </p>
                        {dog.status !== "Missing" && (
                            <button onClick={() => reportMissing(dog.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                                <FaExclamationTriangle className="inline-block mr-2" /> Report Missing
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}