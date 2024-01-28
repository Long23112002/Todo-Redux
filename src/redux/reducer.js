
const initState = {
    filter: {
       search: '',
       status: 'All',
    },
    toDoList: [
        { id: 1, nameTask: 'Task 1', status: true },
        { id: 2, nameTask: 'Task 2', status: false },
        { id: 3, nameTask: 'Task 3', status: false }
    ]
}

const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
     case 'todoList/add_todo':
        return {
           ...state,
           toDoList: [...state.toDoList, action.payload]
        }
     case 'filter/search':
        return {
           ...state,
           filter: {
              ...state.filter,
              search: action.payload
           }
        }
        case 'filter/status':
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload
        }
      };
      case 'todoList/update_status':
         return {
           ...state,
           toDoList: state.toDoList.map(todo =>
             todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
           )
         };
     default:
        return state;
  }
}
export default rootReducer;
