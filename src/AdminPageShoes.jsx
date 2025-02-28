import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPageShoes = () => {
  const [shoesName, setShoesName] = useState("");
  const [shoesPrice, setShoesPrice] = useState("");
  const [shoesSize, setShoesSize] = useState("");
  const [shoesColor, setShoesColor] = useState("");
  const [shoesGender, setShoesGender] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shoesName || !shoesPrice || !shoesSize || !shoesColor || !shoesGender) {
      setError("All fields are required");
      return;
    }

    console.log("Sending data to server:", { shoesName, shoesPrice, shoesSize, shoesColor, shoesGender });

    try {
      const response = await fetch("https://backend-final-pro.onrender.com/AdminShoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: shoesName,
          price: shoesPrice,
          size: shoesSize,
          color: shoesColor,
          gender: shoesGender,
        }),
      });

      if (response.ok) {
        navigate("/adminShoes");
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
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Shoe</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shoesName">Shoe Name</label>
            <input
              type="text"
              id="shoesName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shoesName}
              onChange={(e) => setShoesName(e.target.value)}
              placeholder="Enter shoe name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shoesPrice">Shoe Price</label>
            <input
              type="number"
              id="shoesPrice"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shoesPrice}
              onChange={(e) => setShoesPrice(e.target.value)}
              placeholder="Enter shoe price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shoesSize">Shoe Size</label>
            <input
              type="text"
              id="shoesSize"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shoesSize}
              onChange={(e) => setShoesSize(e.target.value)}
              placeholder="Enter shoe size"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shoesColor">Shoe Color</label>
            <input
              type="text"
              id="shoesColor"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shoesColor}
              onChange={(e) => setShoesColor(e.target.value)}
              placeholder="Enter shoe color"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="shoesGender">Shoe Gender</label>
            <input
              type="text"
              id="shoesGender"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={shoesGender}
              onChange={(e) => setShoesGender(e.target.value)}
              placeholder="Enter shoe gender (e.g., Male, Female)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300"
          >
            Add Shoe
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default AdminPageShoes;
