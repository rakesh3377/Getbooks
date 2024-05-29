import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
        total: 0,
    },
    reducers: {
        additem: (state, { payload }) => {
            const itemSubtotal = payload.price * payload.count;
            state.list = [...state.list, { ...payload, subtotal: itemSubtotal }];
            state.total += itemSubtotal;
        },
        removeitem: (state, { payload }) => {
            const index = state.list.findIndex(product => product.id === payload.id);
            if (index !== -1) {
                const removedItemSubtotal = state.list[index].subtotal;
                state.list = [...state.list.slice(0, index), ...state.list.slice(index + 1)];
                state.total -= removedItemSubtotal;
            }
        },
        
    },
});

export const { additem, removeitem } = cartSlice.actions;

export default cartSlice.reducer;
