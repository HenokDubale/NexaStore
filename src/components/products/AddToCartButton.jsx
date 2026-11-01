"use client";

import { Button } from "@/components/ui/button";

const AddToCartButton = ({ productId, disabled }) => {
  const handleClick = () => {
    // Day 2: replace this line with the Zustand cart action.
    console.log("Add to cart:", productId);
  };

  return (
    <Button className="w-full" disabled={disabled} onClick={handleClick}>
      {disabled ? "Unavailable" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;