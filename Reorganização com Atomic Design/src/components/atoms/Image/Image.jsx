import React from "react";

const Image = ({ src, alt, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
};

export default Image;
