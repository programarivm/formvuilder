import inputActionTypes from '@/store/modules/input/constants'

export const add = ({commit}, payload) => {
  commit(inputActionTypes.ADD, payload)
}

export const cancel = () => {
  commit(inputActionTypes.CLOSE_ADD_DIALOG)
}

export const click = () => {
  commit(inputActionTypes.OPEN_ADD_DIALOG)
}

export const del = ({commit}, payload) => {
  commit(inputActionTypes.DELETE, payload)
}

export const set = ({commit}, payload) => {
  commit(inputActionTypes.SET, payload)
}
