import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    characters: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const char = state.characters.find(
        ({ name }) => name === action.payload.name
      );
      if (char || state.characters.length === 5) {
        return;
      }
      const newChars = [...state.characters,action.payload];
      state.characters=newChars;
    },
    removeFavorite: (state, action) => {
      const newChars = state.characters.filter(({ name }) => name !== action.payload.name);
      state.characters=newChars;
    },
  },
});
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
