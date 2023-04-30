import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../CourseItems";
const initialState = {
    // cartItems: [],
    cartItems: courseItems,
    quantity: 5,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;