"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductGallery = ({ images, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
        <Image
          src={images[selectedIndex]}
          alt={`${name}, view ${selectedIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex gap-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Show image ${index + 1} of ${name}`}
            aria-current={index === selectedIndex}
            className={cn(
              "relative size-20 overflow-hidden rounded-md border-2 bg-muted",
              index === selectedIndex ? "border-primary" : "border-transparent",
            )}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
