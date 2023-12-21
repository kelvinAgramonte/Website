// ProductsData.tsx

import React from 'react';

interface ProductsDataProps {
  product: any; // Adjust the type according to your product structure
}

const ProductsData: React.FC<ProductsDataProps> = ({ product }) => {
  // Use the 'product' prop within this component
  return (
    <div>
      {/* Display product information */}
      <p>{product.name}</p>
      {/* Adjust the display based on the structure of your 'product' object */}
    </div>
  );
};

export default ProductsData;