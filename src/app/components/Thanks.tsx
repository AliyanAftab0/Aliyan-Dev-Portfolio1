import React from "react";

const Thanks = () => {
  const handleBackToPortfolio = () => {
    window.location.href = "/"; 
  };

  return (
    <div
      id="thank"
      className="flex flex-col justify-center items-center pacifico-regular h-screen"
    >
      <h1 className="text-cyan-600 dark:text-cyan-400 text-4xl pacifico-regular">Thank you for the message!💌</h1>
      <h2 className="text-2xl mt-4 pacifico-regular">I'll get back to you as soon as possible!</h2>
      <button
        onClick={handleBackToPortfolio}
        className="bg-cyan-700 text-white mt-8 px-6 py-2 rounded-lg"
      >
        Back To Portfolio
      </button>
    </div>
  );
};

export default Thanks;
