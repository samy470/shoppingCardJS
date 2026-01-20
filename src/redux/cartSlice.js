
import Cart from "../components/Cart";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk("cart/fetchGames", async () => {
  const res = await fetch("http://localhost:5000/api/games");
  return await res.json();
});

const initialState = {
    List: [],

    cart: [],

    details: [
        { name: "Hollow Knight: Silksong", image: "header2.jpg", price: "7.99", details: "As the lethal hunter Hornet, adventure through a kingdom ruled by silk and song! Captured and taken to this unfamiliar world, prepare to battle mighty foes and solve ancient mysteries as you ascend on a deadly pilgrimage to the kingdom’s peak." }
    ]
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        ViewDetails: (state, action) => {
            state.details = [];
            state.details.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item, index) => item.name !== action.payload);
         }
    },
     extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.List = action.payload; // DB -> Redux
    });
}});

export const { addItem, ViewDetails, removeItem } = cartSlice.actions;
export default cartSlice.reducer;