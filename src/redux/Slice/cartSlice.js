import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
      state.totalQuantity += action.payload.quantity || 1
      state.totalPrice += action.payload.price * (action.payload.quantity || 1)
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.totalPrice -= item.price * item.quantity
        state.totalQuantity -= item.quantity
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        state.totalPrice -= item.price * item.quantity
        item.quantity = action.payload.quantity
        state.totalPrice += item.price * item.quantity
        state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
      state.totalQuantity = 0
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
