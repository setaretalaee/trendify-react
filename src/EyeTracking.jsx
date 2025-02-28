
import React, { useEffect, useRef } from "react";

const EyeTracking = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = [leftEyeRef.current, rightEyeRef.current];
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
      
      <div className="flex" style={{ gap: "230px", transform: "translateX(350px) translateY(175px)" }}>

     
        <div
          ref={leftEyeRef}
          className="w-12 h-12 bg-white rounded-full shadow-lg relative overflow-hidden" 
        >
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full border-4 border-indigo-900 transform -translate-x-1/2 -translate-y-1/2 translate-x-[-20%] translate-y-[-20%]"></div>
        </div>

        <div
          ref={rightEyeRef}
          className="w-24 h-24 bg-white rounded-full shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-black rounded-full border-4 border-indigo-900 transform -translate-x-1/2 -translate-y-1/2 translate-x-[-20%] translate-y-[-20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default EyeTracking;
