import actionTypes from './constants'

export const addInput = ({commit}, payload) => {
  commit(actionTypes.ADD, payload)
}

export const cancelInput = ({commit}) => {
  commit(actionTypes.CLOSE_ADD_DIALOG)
}

export const clickInput = ({commit}) => {
  commit(actionTypes.OPEN_ADD_DIALOG)
}

export const delInput = ({commit}, payload) => {
  commit(actionTypes.DELETE, payload)
}

export const setInput = ({commit}, payload) => {
  commit(actionTypes.SET, payload)
}
