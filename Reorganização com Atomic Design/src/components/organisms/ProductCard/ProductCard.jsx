import React from "react";
import Image from "../../atoms/Image/Image";
import ProductHeader from "../../molecules/ProductHeader/ProductHeader";
import PriceSection from "../../molecules/PriceSection/PriceSection";

const ProductCard = ({ product, onBuyClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleBuyClick = () => {
    onBuyClick?.(product);
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    maxWidth: "320px",
    border: "1px solid #E5E7EB",
    transition: "all 0.3s ease",
    cursor: "default",
    ...(isHovered
      ? {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          borderColor: "#3B82F6",
        }
      : {}),
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={product.image} alt={product.title} />

      <ProductHeader title={product.title} description={product.description} />

      <PriceSection price={product.price} onBuyClick={handleBuyClick} />
    </div>
  );
};

export default ProductCard;
