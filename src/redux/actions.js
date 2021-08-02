import { filterType, todoType } from './actionType';

// export const setFilterAll = () =>{
//     return {
//         type: filterType.ALL
//     }
// }
// export const setFilterCompleted = () =>{
//     return {
//         type: filterType.COMPLETED
//     }
// }
// export const setFilterPending = () =>{
//     return {
//         type: filterType.PENDING
//     }
// }

export const AddTodoAction = (text) =>{
    return {
        type: todoType.ADD,
        payload: text
    }
}

export const DeleteTodoAction = (id) => {
    return {
        type: todoType.DELETE,
        payload: id
    }
}

export const CompletedTodoAction = (id) => {
    return {
        type: todoType.COMPLETED,
        payload: id
    }
}

