// ProductsData.tsx

import React from 'react';

interface ProductDataProps {
  product: {
    image: string;
    description: string;
    price: number;
    // Add other properties based on your product structure
  };
}

const ProductsData: React.FC<ProductDataProps> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="Product" className="product-image" />
      <div className="product-details">
        <h2 className="product-description">{product.description}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsData;