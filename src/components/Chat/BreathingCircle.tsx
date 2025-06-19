import React from 'react';

const BreathingCircle = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 
              0 0 10px rgba(255, 255, 255, 0.3),
              0 0 20px rgba(255, 255, 255, 0.2),
              0 0 30px rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
            box-shadow: 
              0 0 15px rgba(255, 255, 255, 0.5),
              0 0 25px rgba(255, 255, 255, 0.3),
              0 0 40px rgba(255, 255, 255, 0.2);
          }
        }
        
        .breathing-circle {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>
      <div className="w-12 h-12 border-2 border-white rounded-full breathing-circle"></div>
    </div>
  );
};

export default BreathingCircle;