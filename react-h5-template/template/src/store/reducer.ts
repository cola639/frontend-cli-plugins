// third-party
import { combineReducers } from 'redux'

// project imports
import snackbarReducer from './slices/snackbar'
import menuReducer from './slices/menu'
import themeReducer from './slices/theme'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  menu: menuReducer,
  theme: themeReducer
})

export default reducer
