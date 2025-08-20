import React from "react";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
