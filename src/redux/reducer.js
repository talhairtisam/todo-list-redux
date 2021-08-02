import { actionType } from "./actionType";

const INITIAL_STATE = {
    Todo: [],
    filterTodo: [],
    filter: "ALL"
}



export const todoReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case actionType.ADD:
            return {
                ...state,
                Todo:[
                    ...state.Todo,
                    {text: action.payload, completed: false, id: Math.random()*1000 }
                ]
            }
        case actionType.DELETE:
            return {
                ...state,
                Todo:state.Todo.filter((todo) => todo.id !== action.payload)
            }
        case actionType.COMPLETED:
            return {
                ...state,
                Todo:state.Todo.map((todo)=>{
                        if(todo.id === action.payload)
                        {
                            return {
                                ...todo, completed: !todo.completed
                            }
                        }
                        return todo
                    })
            }
        case actionType.FILTER:
            return{
                ...state,
                filter: action.payload
            }
        case actionType.DISPLAY:
            switch(state.filter){
                case "COMPLETED":
                    return{
                        ...state,
                        filterTodo: state.Todo.filter(todo => todo.completed === true)
                    }
                case "PENDING":
                    return {
                        ...state,
                        filterTodo: state.Todo.filter(todo => todo.completed === false)
                    }
                default:
                    return {
                        ...state,
                        filterTodo: state.Todo
                    }
            }
        default:
            return state

    }
}
