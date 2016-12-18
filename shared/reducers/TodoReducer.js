import Immutable from 'immutable'

const defaultState = new Immutable.List().insert(0, "I am the first todo!")

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return state.concat(action.text)
    case 'EDIT_TODO':
      return state.set(action.id, action.text)
    case "DELETE_TODO":
      return state.delete(action.id)
    default:
      return state
  }
}

export default todoReducer
