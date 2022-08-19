import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const login = createAsyncThunk("user/login", async (userData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    let user = {
        username: "test",
        password: "123456",
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.username === userData.username) {
                if (user.password === userData.password) {
                    localStorage.setItem("user", JSON.stringify(userData));
                    resolve(user)
                } else {
                    reject("The account name or password is incorrect")
                }
            } else {
                reject("The account name or password is incorrect")
            }
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err);
    })
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify(null))
            resolve(null)
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err.message);
    })
});

export const createAcount = createAsyncThunk("user/createAcount", async (userData, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // check is user
            if (localStorage.getItem("user")) {
                reject("This account exists")
            } else {
                localStorage.setItem("user", JSON.stringify(userData));
                resolve(userData)
            }
        }, 500)
    }).then(res => {
        return res
    }).catch(err => {
        return rejectWithValue(err);
    })
});


const userSlice = createSlice({
    name: "user",
    initialState: { isUser: null },
    reducers: {
        getUser: (state, action) => {
            state.isUser = JSON.parse(localStorage.getItem("user"))
        }
    },
    extraReducers: {
        [createAcount.fulfilled]: (state, action) => {
            state.isUser = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.isUser = action.payload;
        },
        [logout.fulfilled]: (state, action) => {
            state.isUser = action.payload;
        }
    }
});

export const { getUser } = userSlice.actions
export default userSlice.reducer
