import React from "react";
import Text from "../../atoms/Text/Text";

const ProductHeader = ({ title, description }) => {
  const headerStyle = {
    marginBottom: "20px",
  };

  const titleStyle = {
    display: "block",
    marginBottom: "12px",
  };

  const descriptionStyle = {
    display: "block",
  };

  return (
    <div style={headerStyle}>
      <Text variant="title" as="h3" style={titleStyle}>
        {title}
      </Text>
      <Text variant="body" as="p" style={descriptionStyle}>
        {description}
      </Text>
    </div>
  );
};

export default ProductHeader;
