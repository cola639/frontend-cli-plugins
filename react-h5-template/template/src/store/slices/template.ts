// @ts-nocheck
// types
import { TemplateProps } from 'types/template'
import { createSlice } from '@reduxjs/toolkit'

// project imports
import { dispatch } from '../index'
import { apiLogin } from 'api/user'

// initial state
const initialState: TemplateProps = {
  value: ''
}

// ==============================|| SLICE - TEMPLATE ||============================== //

const template = createSlice({
  name: 'template',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.value = action.payload
    },
    hasError(state, action) {
      state.value = action.payload
    }
  }
})

export default template.reducer

export const { activeItem, hasError } = template.actions

// async actions
export function getTemplate() {
  return async () => {
    try {
      const response = await apiLogin()
      dispatch(template.activeItem(response.value))
    } catch (error) {
      dispatch(template.hasError(error))
    }
  }
}
