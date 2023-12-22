// Products.tsx

import React from 'react';
import Container from './Container';
import ProductsData from './ProductsData';


interface ProductsProps {
  products: any[]; // Adjust the type according to your product structure
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10'>
      {products?.map((item, index) => (
        <ProductsData key={index} product={item} />
      ))}
    </Container>
  );
};

export default Products;
