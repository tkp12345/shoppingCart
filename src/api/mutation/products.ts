import {axiosInstance} from "@/api/axios/axios-instance.ts";

export const toggleFavoriteApi = async (id: string, isFavorited: boolean) => {
    return axiosInstance.post('/toggle-favorite', { id, isFavorited });
};