import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { getAccessToken } from "utils";
import { sleep } from "utils/sleep";

export const loginThunk = createAsyncThunk(
    "quanLyNguoiDung/login",
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungServices.login(payload);
            await sleep(1500);
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getUserByAccessTokenThunk = createAsyncThunk(
    "quanLyNguoiDung/getUserByAccessToken",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAccessToken();
            if (token) {
                const data =
                    await quanLyNguoiDungServices.getUserByAccessToKen();
                return data.data.content;
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
