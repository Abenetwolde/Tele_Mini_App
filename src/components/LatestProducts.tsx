import React, { useState } from 'react';

interface Product {
  image: string[];
  description: string;
  unit: string;
  more_details: {
    Manufacturer: string;
    Origin: string;
    "Best Before": string;
    Ingredients?: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="w-40 flex-shrink-0 rounded-lg shadow-md bg-[var(--tg-theme-bg-color)]">
      <div className="h-32 w-full rounded-md overflow-hidden mb-3">
        <img
          src={product.image[imageIndex]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center gap-2 mb-1">
        {product.image.map((img, index) => (
          <div
            key={index}
       
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
      <div className="text-[var(--tg-theme-text-color)]">
        <p className="text-xs mb-2">{product.description}</p>
        <p className="text-xs mb-2">{product.unit}</p>
      
      </div>
    </div>
  );
};

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="container  bg-[var(--tg-theme-secondary-bg-color)]  mx-auto p-4 overflow-x-auto">
      <div className="flex gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
