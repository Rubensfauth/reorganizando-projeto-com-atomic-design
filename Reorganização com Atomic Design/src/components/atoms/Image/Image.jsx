import React from "react";

const Image = ({ src, alt, className = "", style = {}, ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const containerStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    display: "block",
    ...(isHovered
      ? {
          transform: "scale(1.05)",
        }
      : {}),
    ...style,
  };

  return (
    <div style={containerStyle}>
      <img
        src={src}
        alt={alt}
        className={className}
        style={imageStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      />
    </div>
  );
};

export default Image;
