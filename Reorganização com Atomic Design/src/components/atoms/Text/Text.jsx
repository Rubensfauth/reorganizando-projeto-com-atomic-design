import React from "react";

const Text = ({
  children,
  variant = "body",
  as: Component = "span",
  className = "",
  style = {},
  ...props
}) => {
  const styles = {
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1F2937",
      marginBottom: "12px",
      fontFamily: "inherit",
    },
    body: {
      fontSize: "14px",
      color: "#6B7280",
      lineHeight: "1.6",
      fontFamily: "inherit",
    },
    price: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#059669",
      fontFamily: "inherit",
    },
  };

  return (
    <Component
      style={{ ...styles[variant], ...style }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
