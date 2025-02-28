import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import IMAGE from './img/wm.jpeg'; 

const Pages = () => {
  const navigate = useNavigate();

  const handleWomenClick = () => {
    navigate('/TrendifyPart/Women'); 
  };

  const handleMenClick = () => {
    navigate('/TrendifyPart/MenPart'); 
  };

  return (
    <div className="bg-gray-200">
      <div className="relative">
        <img
          src={IMAGE}
          className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
          alt="Trendify"
        />

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-black rounded-lg"
          onClick={handleMenClick} 
        >
          Men
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-black rounded-lg"
          onClick={handleWomenClick} 
        >
          Women
        </button>
      </div>
    </div>
  );
};

export default Pages;