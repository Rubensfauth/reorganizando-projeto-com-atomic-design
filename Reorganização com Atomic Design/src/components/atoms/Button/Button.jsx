import React from "react";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
