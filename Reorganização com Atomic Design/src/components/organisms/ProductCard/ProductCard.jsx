import React from "react";
import Image from "../../atoms/Image/Image";
import ProductHeader from "../../molecules/ProductHeader/ProductHeader";
import PriceSection from "../../molecules/PriceSection/PriceSection";

const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 max-w-sm border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-6">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48"
        />
      </div>

      <ProductHeader title={product.title} description={product.description} />

      <PriceSection price={product.price} onBuyClick={handleBuyClick} />
    </div>
  );
};

export default ProductCard;
