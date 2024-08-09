import { axiosInstance } from "@/api/axios/axios-instance.ts";
import { ProductResponseBody, ProductType } from "@/types/api/product-types.ts";
import { useQuery } from "react-query";

const fetchProducts = async (page: number, type: ProductType) => {
  const { data } = await axiosInstance.get<ProductResponseBody>("/", {
    params: {
      length: 12,
      type,
      category: 25,
      page,
    },
  });
  return data;
};

export const useProducts = (page: number, type: ProductType) => {
  return useQuery<ProductResponseBody>(
    ["products", page, type],
    () => fetchProducts(page, type),
    {
      keepPreviousData: true,
    },
  );
};
