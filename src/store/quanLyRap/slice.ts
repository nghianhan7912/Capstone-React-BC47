import { createSlice } from "@reduxjs/toolkit"
import { Cinema } from "types"
import { getCinemaListThunk } from "."

type QuanLyRapInitialState = {
    cinemaList ?: Cinema[],
}

const initialState: QuanLyRapInitialState = {

}

const quanLyRapSlice = createSlice({
    name :"quanLyRap",
    initialState,
    reducers :{},
    extraReducers(builder){
        builder
        .addCase(getCinemaListThunk.fulfilled, (state,{payload}) => {
            state.cinemaList = payload
        })
    } 
})

export const {reducer : quanLyRapReducer , actions : quanLyRapActions} = quanLyRapSlice
