import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AddToCartButton from "@/components/products/AddToCartButton";
import ProductCard from "@/components/products/ProductCard";
import ProductGallery from "@/components/products/ProductGallery";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/data/product-helpers";
import { formatPrice } from "@/lib/format";
import { LOW_STOCK_THRESHOLD } from "@/lib/constants";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

const ProductPage = async ({ params }) => {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= LOW_STOCK_THRESHOLD;
  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Link
        href="/products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-muted-foreground">
              {product.brand}
            </span>
            <Badge variant="secondary">{product.category}</Badge>
          </div>

          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold">
            {formatPrice(product.priceCents)}
          </p>

          <p className="text-muted-foreground">{product.description}</p>

          {outOfStock && (
            <p className="text-sm text-destructive">Out of stock</p>
          )}
          {lowStock && (
            <p className="text-sm text-orange-600">Only {product.stock} left</p>
          )}

          <div className="max-w-xs pt-2">
            <AddToCartButton productId={product.id} disabled={outOfStock} />
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Related products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
