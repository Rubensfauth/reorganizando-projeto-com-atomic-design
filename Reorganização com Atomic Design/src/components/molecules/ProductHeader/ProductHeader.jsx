import React from "react";
import Text from "../../atoms/Text/Text";

const ProductHeader = ({ title, description }) => {
  return (
    <div className="mb-6">
      <Text
        variant="title"
        as="h3"
        className="mb-3 block hover:text-blue-700 transition-colors duration-300"
      >
        {title}
      </Text>
      <Text variant="body" as="p" className="line-clamp-3 block leading-6">
        {description}
      </Text>
    </div>
  );
};

export default ProductHeader;
