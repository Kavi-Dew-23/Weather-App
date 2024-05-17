import React from "react";

const button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#827FAA] text-white font-bold px-10 py-2 rounded-full"
      >
        {text}
      </button>
    </div>
  );
};

export default button;
