import { apiInstance } from "constant";
import { Cinema } from "types";

const api = apiInstance({
    baseURL : import.meta.env.VITE_QUAN_LY_RAP_API
})

export const quanLyRapService = {
    getCinemaList : () => api.get<ApiResponse<Cinema[]>>("/LayThongTinHeThongRap")
}