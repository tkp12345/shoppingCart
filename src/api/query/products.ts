import {axiosInstance} from "@/api/axios-instance.ts";
import {ProductType} from "@/types/product-types.ts";
import {useQuery} from "react-query";

const fetchProducts = async (page :number , type: ProductType) => {
    const {data} = await  axiosInstance.get('/',{
        params: {
            length: 12,
            type,
            category: 25,
            page,
        },
    });
    return data;
};


export const useProducts = (page: number, type: string) => {
    return useQuery(['products', page, type], () => fetchProducts(page, type), {
        keepPreviousData: true,
    });
};