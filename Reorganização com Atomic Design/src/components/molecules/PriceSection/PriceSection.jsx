import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const PriceSection = ({ price, onBuyClick }) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex flex-col">
        <Text variant="price">R$ {price}</Text>
        <span className="text-xs text-gray-400 mt-1">à vista</span>
      </div>
      <Button variant="primary" onClick={onBuyClick}>
        Comprar
      </Button>
    </div>
  );
};

export default PriceSection;
