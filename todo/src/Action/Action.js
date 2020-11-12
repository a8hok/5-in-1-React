let IdIncrement  = 0;

export const ADDTODO = (item) => ({
    id : IdIncrement++,
    type : 'ADD_TODO',
    task: item,
    completed: false
});

export const UPDATETODO = (id) => ({
    id : id,
    type : 'UPDATE_TODO'
});
