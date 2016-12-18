export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  date: Date.now(),
})

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
  date: Date.now(),
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
})
