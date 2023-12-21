// Products.tsx

import Container from './Container';
import React from 'react';
import ProductsData from './ProductsData';

interface ProductsProps {
  products: any[]; // Adjust the type according to your product structure
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Container>
      {products?.map((item, index) => (
        <ProductsData key={index} product={item} />
      ))}
    </Container>
  );
};

export default Products;
