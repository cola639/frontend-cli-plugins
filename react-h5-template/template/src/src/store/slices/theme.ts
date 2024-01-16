// types
import { createSlice } from '@reduxjs/toolkit'

// project imports

// initial state
const initialState = {
  themeType: 'dark'
}

// ==============================|| SLICE - THEME ||============================== //

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.themeType = action.payload
    }
  }
})

export default theme.reducer

export const { setTheme } = theme.actions
