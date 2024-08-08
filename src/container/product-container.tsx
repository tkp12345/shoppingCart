import {useState} from "react";
import {useProducts} from "@/api/query/products.ts";
import {ProductType} from "@/types/api/product-types.ts";

export const ProductContainer = () => {
    const [page, setPage] = useState(1);
    const [type, setType] = useState<ProductType>('newest');
    const { data } = useProducts(page, type);



    return (
        <div>
        </div>
    );
};
