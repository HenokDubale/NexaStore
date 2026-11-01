import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";

const LOW_STOCK_THRESHOLD = 5;

const ProductCard = ({ product }) => {
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= LOW_STOCK_THRESHOLD;
  const href = `/products/${product.slug}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-card">
      <Link href={href} className="relative block aspect-square bg-muted">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">{product.brand}</span>
          <Badge variant="secondary">{product.category}</Badge>
        </div>

        <Link href={href} className="font-semibold hover:underline">
          {product.name}
        </Link>

        <div className="flex items-center gap-1 text-sm">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-muted-foreground">({product.reviewCount})</span>
        </div>

        <p className="text-lg font-bold">{formatPrice(product.priceCents)}</p>

        {outOfStock && <p className="text-sm text-destructive">Out of stock</p>}
        {lowStock && (
          <p className="text-sm text-orange-600">Only {product.stock} left</p>
        )}

        <div className="mt-auto pt-2">
          <AddToCartButton productId={product.id} disabled={outOfStock} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
