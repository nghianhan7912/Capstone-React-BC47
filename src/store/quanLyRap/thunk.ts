import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapService } from "services/quanLyRap";

export const getCinemaListThunk = createAsyncThunk(
    "quanLyRap/getCinemaList",
    async (_ , {rejectWithValue}) => {
        try{
            const data = await quanLyRapService.getCinemaList();
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)