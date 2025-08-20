import React from "react";
import Text from "../../atoms/Text/Text";

const ProductHeader = ({ title, description }) => {
  return (
    <div className="mb-6">
      <Text variant="title" as="h3" className="mb-3 block">
        {title}
      </Text>
      <Text variant="body" as="p" className="block">
        {description}
      </Text>
    </div>
  );
};

export default ProductHeader;
