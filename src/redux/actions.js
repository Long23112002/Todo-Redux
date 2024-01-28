export const addTodo = (data) => {
    return {
        type: 'todoList/add_todo',
        payload: data
    }
}

export const searchFilterChange = (valueSearch) =>{
    return {
        type: 'filter/search',
        payload :valueSearch
    }
}

export const statusFilterChange = (valueStatus) =>{
    return {
        type: 'filter/status',
        payload :valueStatus
    }
}