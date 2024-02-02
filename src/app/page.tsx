import { ProductType } from "@/interfaces";
import ProductItem from "@/components/products/ProductItem";
import Hero from "@/components/common/Hero";
export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data: ProductType[] = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-0 mt-4">
      <Hero/>
      <section className="flex flex-col mt-20">
        <h1 className="text-center uppercase text-6xl font-medium">El Shop deals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 mt-8">
          {data.map((product) => (
            <ProductItem key={product.id} productData={product} />
          ))
          }
        </div>
      </section>
    </main>
  );
}
