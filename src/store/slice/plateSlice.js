import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { plate } from './../../data/plate';


export const getPlate = createAsyncThunk("plate/getPlate", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(plate)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

let plateSlice = createSlice({
    name: 'plate',
    initialState: { plate: [], isLoading: true, error: null },
    extraReducers: {

        [getPlate.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.plate = action.payload;
        },
        [getPlate.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
});

export default plateSlice.reducer