// src/App.jsx (Versão refatorada)
import React from "react";
import ProductCard from "./components/organisms/ProductCard/ProductCard";

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
    {
      id: 4,
      title: "Smartwatch Sport",
      description:
        "Relógio inteligente resistente à água com GPS integrado, monitor cardíaco preciso e mais de 50 modalidades esportivas para todos os tipos de treino.",
      price: "899,90",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Câmera DSLR Pro",
      description:
        "Câmera profissional com sensor full-frame, lente versátil e recursos avançados para fotografia e vídeos em alta qualidade.",
      price: "3.299,90",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Tablet Ultra",
      description:
        "Tablet premium com tela de alta resolução, processador potente e suporte à caneta digital. Perfeito para criatividade e produtividade.",
      price: "1.899,90",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    },
  ];

  const handleBuy = (product) => {
    alert(`Produto "${product.title}" adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header da página */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              TechStore
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ⚛️ Loja moderna construída com{" "}
              <span className="font-semibold text-indigo-600">
                Atomic Design
              </span>
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                Átomos
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                Moléculas
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Organismos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 py-12">
        {/* Grid de produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {sampleProducts.map((product, index) => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProductCard product={product} onBuyClick={handleBuy} />
            </div>
          ))}
        </div>

        {/* Card de informações sobre o projeto */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                🎯 Projeto Atomic Design
              </h2>
              <p className="text-gray-600">
                Este projeto demonstra a implementação da metodologia Atomic
                Design em React
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Átomos */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-3xl mb-3">🔸</div>
                <h3 className="font-bold text-blue-800 mb-2">Átomos</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Button</li>
                  <li>• Text</li>
                  <li>• Image</li>
                </ul>
              </div>

              {/* Moléculas */}
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-3xl mb-3">🔹</div>
                <h3 className="font-bold text-green-800 mb-2">Moléculas</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• ProductHeader</li>
                  <li>• PriceSection</li>
                </ul>
              </div>

              {/* Organismos */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-3xl mb-3">🔷</div>
                <h3 className="font-bold text-purple-800 mb-2">Organismos</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• ProductCard</li>
                </ul>
              </div>
            </div>

            {/* Benefícios */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
              <h3 className="font-bold text-indigo-800 mb-4 text-center">
                ✨ Benefícios Alcançados
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-indigo-700">
                <div className="flex items-start space-x-2">
                  <span className="text-indigo-500">•</span>
                  <span>
                    <strong>Reutilização:</strong> Componentes modulares
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-indigo-500">•</span>
                  <span>
                    <strong>Manutenção:</strong> Alterações centralizadas
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-indigo-500">•</span>
                  <span>
                    <strong>Testabilidade:</strong> Componentes isolados
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-indigo-500">•</span>
                  <span>
                    <strong>Escalabilidade:</strong> Estrutura organizada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/60 backdrop-blur-sm border-t border-white/20 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="text-sm">
            💻 Desenvolvido com React + Tailwind CSS | Metodologia Atomic Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
