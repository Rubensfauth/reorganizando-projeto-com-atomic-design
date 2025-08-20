import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const PriceSection = ({ price, onBuyClick }) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
      <div>
        <Text variant="price">R$ {price}</Text>
        <p className="text-xs text-gray-500 mt-1">à vista</p>
      </div>
      <Button variant="primary" onClick={onBuyClick}>
        Comprar
      </Button>
    </div>
  );
};

export default PriceSection;
