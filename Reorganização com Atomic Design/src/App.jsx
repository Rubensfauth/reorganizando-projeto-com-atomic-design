// src/App.jsx
import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const sampleProducts = [
    {
      id: 1,
      title: "Smartphone Galaxy Pro",
      description:
        "Um smartphone moderno com câmera de alta resolução, processador rápido e bateria de longa duração. Ideal para fotos, vídeos e produtividade.",
      price: "1.299,90",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Laptop Ultrabook",
      description:
        "Laptop fino e leve com processador de última geração, ideal para trabalho e estudos. Inclui SSD rápido e tela Full HD.",
      price: "2.499,90",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Fones Bluetooth",
      description:
        "Fones de ouvido sem fio com cancelamento de ruído ativo, bateria de longa duração e qualidade de som premium.",
      price: "399,90",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    },
  ];

  const handleBuy = (product) => {
    alert(`Produto "${product.title}" adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Loja de Produtos
        </h1>
        <p className="text-center text-gray-600 mb-8">
          📦 Componente ProductCard simples - antes da reorganização
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyClick={handleBuy}
            />
          ))}
        </div>

        {/* Próximo passo */}
        <div className="mt-12 max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            📋 Próximo passo: Reorganizar com Atomic Design
          </h2>
          <p className="text-blue-700 mb-4">
            Agora que temos o ProductCard funcionando, vamos reorganizar
            criando:
          </p>
          <ul className="space-y-1 text-blue-700">
            <li>
              🔸 <strong>Átomos:</strong> Button, Text, Image
            </li>
            <li>
              🔹 <strong>Moléculas:</strong> ProductHeader, PriceSection
            </li>
            <li>
              🔷 <strong>Organismos:</strong> ProductCard refatorado
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
