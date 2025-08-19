import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const PriceSection = ({ price, onBuyClick }) => {
  return (
    <div className="flex items-center justify-between">
      <Text variant="price">R$ {price}</Text>
      <Button variant="primary" onClick={onBuyClick}>
        Comprar
      </Button>
    </div>
  );
};

export default PriceSection;
