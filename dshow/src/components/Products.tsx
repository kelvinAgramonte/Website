// Products.tsx

import React, { useState } from 'react';
import Container from './Container';
import ProductsData from './ProductsData';
// import { Products } from '../../type';
import SearchFilter from '@/components/clothin_page/SearchFilter'; // Import your SearchFilter component

interface Product {
  // Define your product structure
  _id:number;
  title:string;
  isNew:boolean;
  oldPrice:number;
  price:number;
  description:string;
  category:string;
  image:string;
  quantity:number;
  // ...other properties
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const filterProducts = (selectedCategory: string) => {
    if (selectedCategory === '') {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      const filtered = products.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  const categories = Array.from(new Set(products.map((product) => product.category))); // Get unique categories

  return (
    <div>
      <SearchFilter categories={categories} filterProducts={filterProducts} />
      <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10'>
        {filteredProducts.map((product) => (
          <ProductsData key={product._id} product={product} />
        ))}
      </Container>
    </div>
  );
};

export default Products;