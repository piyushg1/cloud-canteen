import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ['angoor 🍇', 'seb 🍎', 'kaddu 🎃']
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items.pop()
        }
    }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer