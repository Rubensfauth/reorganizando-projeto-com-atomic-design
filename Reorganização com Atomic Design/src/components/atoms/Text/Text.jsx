import React from "react";

const Text = ({
  children,
  variant = "body",
  as: Component = "span",
  className = "",
}) => {
  const variants = {
    title: "text-2xl font-bold text-gray-800",
    body: "text-gray-600 text-sm",
    price: "text-3xl font-bold text-green-500",
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
