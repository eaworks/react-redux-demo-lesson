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
        },
        increace: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity += 1;
        },
        decreace: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity -= 1;
        }
    }
});

export const { clearCart, remoteItem, increace, decreace } = cartSlice.actions;
export default cartSlice.reducer;