import React from "react";

const Text = ({
  children,
  variant = "body",
  as: Component = "span",
  className = "",
}) => {
  const variants = {
    title: "text-xl font-bold text-gray-900 tracking-tight",
    body: "text-gray-600 text-sm leading-relaxed",
    price: "text-3xl font-bold text-emerald-600 tracking-wide",
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
