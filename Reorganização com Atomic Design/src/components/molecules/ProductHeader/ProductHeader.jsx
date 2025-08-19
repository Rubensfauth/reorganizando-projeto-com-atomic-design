import React from "react";
import Text from "../../atoms/Text/Text";

const ProductHeader = ({ title, description }) => {
  return (
    <div className="mb-4">
      <Text variant="title" as="h3" className="mb-2 block">
        {title}
      </Text>
      <Text variant="body" as="p" className="line-clamp-3 block">
        {description}
      </Text>
    </div>
  );
};

export default ProductHeader;
