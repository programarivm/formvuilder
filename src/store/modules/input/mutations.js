export const ADD_INPUT = (state, payload) => {
  state.open = false
  state.items.push(payload)
}

export const CLOSE_ADD_DIALOG_INPUT = (state) => {
  state.open = false
}

export const OPEN_ADD_DIALOG_INPUT = (state) => {
  state.open = true
}
