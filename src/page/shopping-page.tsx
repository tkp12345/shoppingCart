import { ProductContainer } from "@/container/product-container.tsx";
import { AsyncBoundary } from "@/lib/utils/error/async-boundary.tsx";

export const ShoppingPage = () => {
  console.log("ShoppingPage:");
  return (
    <AsyncBoundary>
      <ProductContainer />
    </AsyncBoundary>
  );
};
