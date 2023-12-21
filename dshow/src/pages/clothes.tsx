// pages/clothes.tsx


import React, { useEffect, useState } from 'react';
import '@/app/css/globals.css'
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { getProducts } from "@/helpers";

import { SessionProvider } from 'next-auth/react';



export default function ClothesPage() {
    const [products, setProducts] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchProducts() {
        try {
          const fetchedProducts = await getProducts();
          console.log(fetchedProducts);
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
  
      fetchProducts();
    }, []);
  
    return (
      <SessionProvider>
        <Header />
        <Products products={products} />
        <Footer />
      </SessionProvider>
    );
  }