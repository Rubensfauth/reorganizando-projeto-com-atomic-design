import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const styles = {
    base: {
      padding: "12px 24px",
      borderRadius: "12px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "14px",
      fontFamily: "inherit",
    },
    primary: {
      background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      color: "white",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
      ...(isHovered
        ? {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
          }
        : {}),
    },
    secondary: {
      backgroundColor: "#F3F4F6",
      color: "#374151",
      border: "1px solid #D1D5DB",
      ...(isHovered
        ? {
            backgroundColor: "#E5E7EB",
            transform: "translateY(-1px)",
          }
        : {}),
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...styles.base, ...styles[variant], ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
