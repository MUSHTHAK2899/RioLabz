import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productItem:[],
  }

export const productItem = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setItem: (state, action) => {
    console.log(action.payload)
    state.productItem=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItem } = productItem.actions
export const selectChatItem = (state) => state.chatData.productItem;
export default productItem.reducer