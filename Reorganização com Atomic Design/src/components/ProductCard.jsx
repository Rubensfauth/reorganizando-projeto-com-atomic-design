import React from "react";

const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm border border-gray-200 hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-green-600">
          R$ {product.price}
        </span>
        <button
          onClick={handleBuyClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
