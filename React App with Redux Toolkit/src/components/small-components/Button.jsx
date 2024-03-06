import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' inline py-1 px-5 text-white font-semibold bg-yellow-700 m-1 rounded-md'>
      {children}
    </button>
  );
};

export default Button;
