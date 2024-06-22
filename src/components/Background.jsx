import React from 'react';

const Background = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="https://youtu.be/RZLWg_UxY_E?si=rCTgu7gddfXucdcX" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Video Background Web with React and Tailwind CSS</h1>
        <p className="text-lg">Enjoy the awesome video background effect!</p>
      </div>
    </div>
  );
}

export default Background