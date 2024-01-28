
export const todoListSelector = (state) => {
    const toDos = state.toDoList.filter((todo) =>{
       return todo.nameTask.includes(state.filter.search)
    })
    return toDos;
}
export const searchFilterSelector = (state) => state.filter.search


export const statusFilterSelector = (state) => state.filter.status;

export const updateTodoStatus = (id, status) => ({
    type: 'todoList/update_status',
    payload: { id, status }
  });