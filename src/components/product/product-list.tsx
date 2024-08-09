import React from "react";
import { Product } from "@/types/api/product-types.ts";
import styled from "@emotion/styled";
import { ProductCard } from "@/components/product/product-card.tsx";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
