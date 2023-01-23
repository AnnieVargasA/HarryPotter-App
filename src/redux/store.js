import { configureStore } from '@reduxjs/toolkit'
import  favoriteSlice  from './reducers/favorites/favoritesSlice'

export default configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
})