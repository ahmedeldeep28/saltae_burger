import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { offers } from '../../data/offer';

export const getOffers = createAsyncThunk("offers/getOffers", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(offers)
        }, 1000)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

let offerSlice = createSlice({
    name: "offers",
    initialState: { offers: [], isLoading: true, error: null },
    extraReducers: {
        //get Menu Foods
        [getOffers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.offers = action.payload;
        },
        [getOffers.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
});





export default offerSlice.reducer