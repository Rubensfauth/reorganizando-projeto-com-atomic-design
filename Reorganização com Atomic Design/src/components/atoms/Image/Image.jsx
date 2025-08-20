import React from "react";

const Image = ({ src, alt, className = "" }) => {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
};

export default Image;
