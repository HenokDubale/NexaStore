import { products } from "./products";

export function getAllProducts() {
  // Return a copy so callers can sort() without mutating the source data.
  return [...products];
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
