import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItem = createAsyncThunk("cart/geCartItem", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.parse(localStorage.getItem("cart")) || [])
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const deleteCartItem = createAsyncThunk("cart/deleteCartItem", async (foodName, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cart = JSON.parse(localStorage.getItem("cart"))
            let filterCart = cart.filter(el => {
                return el.foodName !== foodName
            })
            localStorage.setItem("cart", JSON.stringify(filterCart))
            resolve(filterCart)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const getSizeCart = createAsyncThunk("cart/getSizeCart", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!localStorage.getItem("cart")) {
                resolve("0")
            } else {
                resolve(JSON.parse(localStorage.getItem("cart")).length || 0)
            }
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const addItemToCart = createAsyncThunk("cart/addItemToCart", async (data, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        let cart_value = JSON.parse(localStorage.getItem("cart")) || [];
        cart_value.push(data);
        localStorage.setItem("cart", JSON.stringify(cart_value))
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const clearCart = createAsyncThunk("cart/addItemToCart", async (data, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        localStorage.removeItem("cart")
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

let cardSlice = createSlice({
    name: "cart",
    initialState: { cartItem: [], sizeCart: 0, isLoading: true, error: null },
    extraReducers: {
        [getCartItem.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItem = action.payload;
        },
        [getCartItem.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [getSizeCart.fulfilled]: (state, action) => {
            state.sizeCart = action.payload;
        },
        [getSizeCart.rejected]: (state, action) => {
            state.sizeCart = 0;
        },

        [deleteCartItem.fulfilled]: (state, action) => {
            state.cartItem = action.payload;
        }
    }
});

export default cardSlice.reducer    