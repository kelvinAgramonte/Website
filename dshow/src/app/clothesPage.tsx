import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import { getProducts } from "@/helpers"
import Products from "@/components/Products";



export default async function ClothesPage() {
    const products = await getProducts();
    console.log(products);
  return (
    <main>
      <Banner />
      <Products />
     
      <Footer />
    </main>
  )
}