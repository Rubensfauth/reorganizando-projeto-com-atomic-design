import React from "react";
import Image from "../../atoms/Image/Image";
import ProductHeader from "../../molecules/ProductHeader/ProductHeader";
import PriceSection from "../../molecules/PriceSection/PriceSection";

const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 max-w-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 rounded-lg"
        />
      </div>

      <ProductHeader title={product.title} description={product.description} />

      <PriceSection price={product.price} onBuyClick={handleBuyClick} />
    </div>
  );
};

export default ProductCard;
