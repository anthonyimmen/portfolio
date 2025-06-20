const BreathingCircle = () => {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 
              0 0 5px rgba(255, 255, 255, 0.3),
              0 0 15px rgba(255, 255, 255, 0.2),
              0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
            box-shadow: 
              0 0 10px rgba(255, 255, 255, 0.5),
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 25px rgba(255, 255, 255, 0.2);
          }
        }
        .breathing-circle {
          animation: breathe 3s ease-in-out infinite;
          width: 2rem;
          height: 2rem;
          border: 2px solid #fff;
          border-radius: 9999px;
          margin: 0 auto;
          background: transparent;
        }
      `}</style>
      <div className="breathing-circle"></div>
    </>
  );
};

export default BreathingCircle;