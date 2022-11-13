import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menuFoods, homeFoods } from './../../data/foods';


export const getMenuFoods = createAsyncThunk("foods/getMenuFoods", async (foodName, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let foodNameValue = foodName ? foodName : ""
            let filterFood = menuFoods.filter((el) => {
                return el.category.includes(foodNameValue)
            })
            resolve(filterFood)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});


export const searchFoods = createAsyncThunk("foods/searchFoods", async (trem, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        let categoryValue = trem.category ? trem.category : "";
        let filterFood = menuFoods.filter((el) => {
            return el.foodName.toLowerCase().includes(trem.search.toLowerCase()) && el.category.includes(categoryValue)
        })
        resolve(filterFood)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const getHomeFoods = createAsyncThunk("foods/getHomeFoods", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(homeFoods)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

let foodSlice = createSlice({
    name: "foods",
    initialState: { menuFoods: [], homeFoods: [], isLoading: true, error: null },
    reducers: {
        removeFoods:(state, action) => {
            state.menuFoods = [];
            state.isLoading = true;
            
        }
    },
    extraReducers: {
        //get Menu Foods
        [getMenuFoods.fulfilled]: (state, action) => {
            state.isLoading = false
            state.menuFoods = action.payload;
        },
        [getMenuFoods.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },

        //get Menu Foods
        [searchFoods.fulfilled]: (state, action) => {
            state.isLoading = false
            state.menuFoods = action.payload;
        },
        [searchFoods.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },

        //get Menu Foods
        [getHomeFoods.fulfilled]: (state, action) => {
            state.isLoading = false
            state.homeFoods = action.payload;
        },
        [getHomeFoods.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },

    }
});

export const { removeFoods } = foodSlice.actions

export default foodSlice.reducer