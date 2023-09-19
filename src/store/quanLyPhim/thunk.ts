import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "services";
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
    "quanLyPhim/getMovieList",
    async(_, { rejectWithValue }) => {
        try{
            const data = await quanLyPhimService.getMovieList("?maNhom=GP08")
            const data2 = await quanLyPhimService.getMovieList("?maNhom=GP03")
            const data3 = [...data.data.content,...data2.data.content]
            await sleep(2000)
            if(data) {return data3}
        } catch (err) {
            return rejectWithValue(err)
        }
    }
);

export const getBannerListThunk = createAsyncThunk(
    "quanLyPhim/LayDanhSachBanner",
    async(_, {rejectWithValue}) => {
        try {
            const data = await quanLyPhimService.getBannerList();
            return data.data.content
        } catch(err) {
            return rejectWithValue(err)
        }
    }
)
