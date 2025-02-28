import React, { useState } from 'react';
import img1 from './img/1.jpg';
import img2 from './img/10.webp';
import img3 from './img/6.webp';
import img4 from './img/Red.jfif';
import img5 from './img/5.webp';

const imageModal = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex justify-center space-x-4 bg-black">
            <div
                className={`w-[calc(17rem)] h-144 overflow-hidden rounded-full bg-gray-100 shadow-lg transition-all duration-300 ease-in ${activeIndex === 0 ? 'scale-110' : ''}`}
                onClick={() => handleClick(0)}
            >
                <img src={img1} alt="img1" className="w-full h-full object-cover" />
            </div>
            <div
                className={`w-[calc(17rem)] h-144 overflow-hidden rounded-full bg-gray-100 shadow-lg transition-all duration-300 ease-in ${activeIndex === 1 ? 'scale-110' : ''}`}
                onClick={() => handleClick(1)}
            >
                <img src={img2} alt="img2" className="w-full h-full object-cover" />
            </div>
            <div
                className={`w-[calc(17rem)] h-144 overflow-hidden rounded-full bg-gray-100 shadow-lg transition-all duration-300 ease-in ${activeIndex === 2 ? 'scale-110' : ''}`}
                onClick={() => handleClick(2)}
            >
                <img src={img3} alt="img3" className="w-full h-full object-cover" />
            </div>
            <div
                className={`w-[calc(17rem)] h-144 overflow-hidden rounded-full bg-gray-100 shadow-lg transition-all duration-300 ease-in ${activeIndex === 3 ? 'scale-110' : ''}`}
                onClick={() => handleClick(3)}
            >
                <img src={img4} alt="img4" className="w-full h-full object-cover" />
            </div>
            <div
                className={`w-[calc(17rem)] h-144 overflow-hidden rounded-full bg-gray-100 shadow-lg transition-all duration-300 ease-in ${activeIndex === 4 ? 'scale-110' : ''}`}
                onClick={() => handleClick(4)}
            >
                <img src={img5} alt="img5" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default imageModal;
