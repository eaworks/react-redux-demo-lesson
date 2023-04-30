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
        },
        remoteItem: (state, action) => {
            // console.log(action.payload)
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
});

export const { clearCart, remoteItem } = cartSlice.actions;
export default cartSlice.reducer;