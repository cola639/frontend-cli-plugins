import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuItem: ''
}

const menuItem = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {}
})

export default menuItem.reducer
