import inputActionTypes from './constants'

export const inputActionTypes.CLOSE_ADD_DIALOG = (state) => {
  state.open = false
}

export const inputActionTypes.OPEN_ADD_DIALOG = (state) => {
  state.open = true
}
