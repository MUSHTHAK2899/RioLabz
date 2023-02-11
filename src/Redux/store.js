import { configureStore } from '@reduxjs/toolkit'
import productItem from'../Redux/List'

export const store = configureStore({
  reducer: {
    productItem
  },
})