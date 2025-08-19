// src/components/organisms/ProductCard/ProductCard.jsx
import React from "react";
import Image from "../../atoms/Image/Image";
import ProductHeader from "../../molecules/ProductHeader/ProductHeader";
import PriceSection from "../../molecules/PriceSection/PriceSection";

const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 rounded-md"
        />
      </div>

      <ProductHeader title={product.title} description={product.description} />

      <PriceSection price={product.price} onBuyClick={handleBuyClick} />
    </div>
  );
};

export default ProductCard;
