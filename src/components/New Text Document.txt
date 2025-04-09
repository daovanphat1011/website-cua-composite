import React from "react";

const Products = () => {
  const products = [
    { src: "https://via.placeholder.com/400x300", name: "C?a KOS 107", price: "2.300.000d" },
    { src: "https://via.placeholder.com/400x300", name: "C?a KOS 211", price: "2.500.000d" },
    { src: "https://via.placeholder.com/400x300", name: "C?a KOS 213", price: "2.700.000d" },
    { src: "https://via.placeholder.com/400x300", name: "C?a KOS 108", price: "2.900.000d" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">S?n Ph?m</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={product.src} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;