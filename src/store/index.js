import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import chefSlice from "./slice/chefSlice";
import foodSlice from "./slice/foodSlice";
import offerSlice from "./slice/offerSlice";
import plateSlice from "./slice/plateSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer: {
        foods: foodSlice,
        user: userSlice,
        plate: plateSlice,
        chefs: chefSlice,
        offers: offerSlice,
        cart: cartSlice
    }
})

export default store