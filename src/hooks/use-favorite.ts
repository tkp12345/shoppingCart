import {useMutation, useQueryClient} from "react-query";
import {useProductStore} from "@/store/productStore.tsx";
import {toggleFavoriteApi} from "@/api/mutation/products.ts";

interface FavoriteArgs {
    id: string;
    isFavorited: boolean;
}

export const useFavorite = () => {
    const queryClient = useQueryClient();
    const toggleFavorite = useProductStore((state) => state.toggleFavorite);

    const mutation = useMutation(({ id, isFavorited }: FavoriteArgs) => toggleFavoriteApi(id, isFavorited), {
        onMutate: async (variables) => {
            await queryClient.cancelQueries('products');
            const previousProducts = queryClient.getQueryData('products');
            toggleFavorite(variables.id);
            return { previousProducts };
        },
        onError: (error, variables, context) => {
            if (context?.previousProducts) {
                queryClient.setQueryData('products', context.previousProducts);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries('products');
        },
    });

    const handleFavoriteClick = (id: string, isFavorited: boolean) => {
        mutation.mutate({ id, isFavorited: !isFavorited });
    };

    return { handleFavoriteClick };
};