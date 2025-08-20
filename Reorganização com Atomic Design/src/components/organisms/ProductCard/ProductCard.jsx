import React from "react";
import Image from "../../atoms/Image/Image";
import ProductHeader from "../../molecules/ProductHeader/ProductHeader";
import PriceSection from "../../molecules/PriceSection/PriceSection";

const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 max-w-sm border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden group">
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-52 rounded-xl"
          />
        </div>

        <ProductHeader
          title={product.title}
          description={product.description}
        />

        <PriceSection price={product.price} onBuyClick={handleBuyClick} />
      </div>
    </div>
  );
};

export default ProductCard;
