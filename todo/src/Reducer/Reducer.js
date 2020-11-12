const toDo = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_TODO' :
           return [
               ...state,
                {
                   id: action.id,
                   task: action.task,
                   completed: action.completed
                } 
            ];

        case 'UPDATE_TODO' :
            return state.map(item => {
                if (item.id === action.id) { 
                    item.completed = !item.completed
                }
                return item;
            })

        default:
            return state;
    }
}

export default toDo;
