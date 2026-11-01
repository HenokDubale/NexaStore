import ProductCard from "@/components/products/ProductCard";
import { getAllProducts } from "@/lib/data/product-helpers";

export const metadata = {
  title: "Products",
  description: "Browse all products available at NexaStore.",
};

const ProductsPage = () => {
  const products = getAllProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
