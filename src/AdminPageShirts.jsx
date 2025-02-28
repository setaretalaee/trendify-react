import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPageShirts = () => {
  const [shirtsName, setShirtsName] = useState("");
  const [shirtsPrice, setShirtsPrice] = useState("");
  const [shirtsSize, setShirtsSize] = useState("");
  const [shirtsColor, setShirtsColor] = useState("");
  const [shirtsGender, setShirtsGender] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shirtsName || !shirtsPrice || !shirtsSize || !shirtsColor || !shirtsGender) {
      setError("All fields are required");
      return;
    }

    console.log("Sending data to server:", { shirtsName, shirtsPrice, shirtsSize, shirtsColor, shirtsGender });

    try {
      const response = await fetch("https://backend-final-pro.onrender.com/AdminShirts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: shirtsName,
          price: shirtsPrice,
          size: shirtsSize,
          color: shirtsColor,
          gender: shirtsGender,
        }),
      });

      if (response.ok) {
        navigate("/adminShirts");
      } else {
        const data = await response.json();
        setError(data.message || "Submission failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Shirt</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shirtsName">Shirt Name</label>
            <input
              type="text"
              id="shirtsName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shirtsName}
              onChange={(e) => setShirtsName(e.target.value)}
              placeholder="Enter shirt name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shirtsPrice">Shirt Price</label>
            <input
              type="number"
              id="shirtsPrice"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shirtsPrice}
              onChange={(e) => setShirtsPrice(e.target.value)}
              placeholder="Enter shirt price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shirtsSize">Shirt Size</label>
            <input
              type="text"
              id="shirtsSize"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shirtsSize}
              onChange={(e) => setShirtsSize(e.target.value)}
              placeholder="Enter shirt size"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shirtsColor">Shirt Color</label>
            <input
              type="text"
              id="shirtsColor"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shirtsColor}
              onChange={(e) => setShirtsColor(e.target.value)}
              placeholder="Enter shirt color"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shirtsGender">Shirt Gender</label>
            <input
              type="text"
              id="shirtsGender"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shirtsGender}
              onChange={(e) => setShirtsGender(e.target.value)}
              placeholder="Enter shirt gender (e.g., Male, Female)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300"
          >
            Add Shirt
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default AdminPageShirts;
5