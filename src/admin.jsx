import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AdminPageShirts from './AdminPageShirts';
import AdminPageShoes from './AdminPageShoes';
import DELETEOPTION from './deleteOption';


const AdminPage = () => {

  const handleLoginClick = () => {
    navigate('/'); 
  };

  const [hatsName, setHatsName] = useState("");
  const [hatsPrice, setHatsPrice] = useState("");
  const [hatsSize, setHatsSize] = useState("");
  const [hatsColor, setHatsColor] = useState("");
  const [hatsGender, setHatsGender] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    // e.preventDefault();
  
    if (!hatsName || !hatsPrice || !hatsSize || !hatsColor || !hatsGender) {
      setError("All fields are required");
      return;
    }
  
    console.log("Sending data to server:", { hatsName, hatsPrice, hatsSize, hatsColor, hatsGender });
  
    try {
      const response = await fetch("https://backend-final-pro.onrender.com/AdminHats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: hatsName,   
          price: hatsPrice,
          size: hatsSize,
          color: hatsColor,
          gender: hatsGender,
        }),
      });
  
      if (response.ok) {
        navigate("/adminHats");
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
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Hat</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="hatsName">Hat Name</label>
            <input
              type="text"
              id="hatsName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={hatsName}
              onChange={(e) => setHatsName(e.target.value)}
              placeholder="Enter hat name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="hatsPrice">Hat Price</label>
            <input
              type="number"
              id="hatsPrice"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={hatsPrice}
              onChange={(e) => setHatsPrice(e.target.value)}
              placeholder="Enter hat price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="hatsSize">Hat Size</label>
            <input
              type="text"
              id="hatsSize"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={hatsSize}
              onChange={(e) => setHatsSize(e.target.value)}
              placeholder="Enter hat size"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="hatsColor">Hat Color</label>
            <input
              type="text"
              id="hatsColor"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={hatsColor}
              onChange={(e) => setHatsColor(e.target.value)}
              placeholder="Enter hat color"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="hatsGender">Hat Gender</label>
            <input
              type="text"
              id="hatsGender"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={hatsGender}
              onChange={(e) => setHatsGender(e.target.value)}
              placeholder="Enter hat gender (e.g., Male, Female)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300" onClick={handleLoginClick} 
          >
            Add Hat
          </button>
        </form>
        
      </div>
      {<AdminPageShirts />}
      {<AdminPageShoes />}
      <div className="w-100 " >
          {/* {<DELETEOPTION />} */}
      </div>
    


    </div>
    
  );
};

export default AdminPage;
