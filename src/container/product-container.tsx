import { useState } from "react";
import { useProducts } from "@/api/query/products.ts";
import { ProductType } from "@/types/api/product-types.ts";
import { ProductList } from "@/components/product/product-list.tsx";
import { ProductNoData } from "@/components/product/product-no-data.tsx";

export const ProductContainer = () => {
  const [page, setPage] = useState(1);
  const [type, setType] = useState<ProductType>("newest");
  const { data } = useProducts(page, type);

  if (!data || !data.data) {
    return <ProductNoData />;
  }

  // const { total } = data.data.meta.pageInfo;
  const products = data?.data.data.body;

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
