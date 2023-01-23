import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    characters: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.characters.push(action.payload)
    },
  },
})
export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer