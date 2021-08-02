import { actionType } from './actionType';

export const changeFilter = (temp) =>{
    return {
        type: actionType.FILTER,
        payload: temp
    }
}

export const AddTodoAction = (text) =>{
    return {
        type: actionType.ADD,
        payload: text
    }
}

export const DeleteTodoAction = (id) => {
    return {
        type: actionType.DELETE,
        payload: id
    }
}

export const CompletedTodoAction = (id) => {
    return {
        type: actionType.COMPLETED,
        payload: id
    }
}

export const DisplayAction = () => {
    return {
        type: actionType.DISPLAY
    }
}


