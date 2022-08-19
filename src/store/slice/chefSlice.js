import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chefs } from './../../data/chef';

export const getChefs = createAsyncThunk("chefs/getChefs", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(chefs)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

let chefSlice = createSlice({
    name: "chefs",
    initialState: { chefs: [], isLoading: true, error: null },
    extraReducers: {
        //get Menu Foods
        [getChefs.fulfilled]: (state, action) => {
            state.isLoading = false
            state.chefs = action.payload;
        },
        [getChefs.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
});





export default chefSlice.reducer