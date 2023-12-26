import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { getProducts } from "@/helpers";
import Products from "@/components/Products";

export default function ClothesPage({ products }: { products: any[] }) {
  return (
    <main>
      <Banner />
      <Products products={products} /> {/* Pass the fetched products */}
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}