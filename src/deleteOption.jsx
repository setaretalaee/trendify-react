import React, { useState } from 'react'; 
import IMAGE from './Image/search.jpeg';

const DeleteOption = () => {
  const [id, setId] = useState(''); 
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!id) {
      alert("Please enter an ID.");
      return;
    }
  
    console.log('Sending ID:', id);  // چاپ مقدار id
  
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:3000/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),  // ارسال id به سرور
      });
  
      const data = await response.json();  // دریافت داده‌ها به صورت json
  
      if (response.ok) {
        alert("Success: " + data.message);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the item.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-gray-200">
      <div className="relative">
        <img
          src={IMAGE}
          className="w-full h-[750px] object-cover border-20 border-white sm:h-[500px] md:h-[600px]"
          alt="Trendify"
        />

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h2 className="text-white text-3xl mb-4">Please enter the desired ID</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search ID"
              className="p-2 rounded-lg w-1/2 sm:w-2/3 md:w-1/3 text-black"
              value={id}
              onChange={(e) => setId(e.target.value)} 
            />
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteOption;
