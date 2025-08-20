import React from "react";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
