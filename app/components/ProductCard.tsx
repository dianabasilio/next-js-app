"use client";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("CLICK");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
