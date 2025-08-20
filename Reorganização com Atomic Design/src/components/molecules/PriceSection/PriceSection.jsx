import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const PriceSection = ({ price, onBuyClick }) => {
  const sectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
    borderTop: "1px solid #E5E7EB",
  };

  const priceInfoStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const subtextStyle = {
    fontSize: "12px",
    color: "#9CA3AF",
    marginTop: "4px",
    fontFamily: "inherit",
  };

  return (
    <div style={sectionStyle}>
      <div style={priceInfoStyle}>
        <Text variant="price">R$ {price}</Text>
        <span style={subtextStyle}>à vista</span>
      </div>
      <Button variant="primary" onClick={onBuyClick}>
        Comprar
      </Button>
    </div>
  );
};

export default PriceSection;
