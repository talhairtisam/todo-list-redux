import { filterType,todoType } from "./actionType";

const INITIAL_STATE = {
    Todo: []
    // ,
    // filterTodo: [],
    // filter: filterType.ALL
}


export const todoReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case todoType.ADD:
            return {
                ...state,
                Todo:[
                    ...state.Todo,
                    {text: action.payload, completed: false, id: Math.random()*1000 }
                ]
                // ,
                // filterTodo:(state.filter === filterType.ALL)?Todo:state.filterTodo
            }
            break;
        case todoType.DELETE:
            return {
                ...state,
                Todo:[
                    state.filter((todo) => todo.id !== action.payload)
                ]
            }
            break;
        case todoType.COMPLETED:
            return {
                ...state,
                Todo:[
                    state.map((todo)=>{
                        if(todo.id === action.payload)
                        {
                            return {
                                ...todo, completed: !todo.completed
                            }
                        }
                        return todo
                    })
                ]
            }
            break;
            // case filterType.COMPLETED:
            //     return {
            //         ...state,
            //         filterTodo:[
            //             state.Todos.filter((todo) => todo.completed)
            //         ]
            //     }
            //     break;
            // case filterType.PENDING:
            //     return {
            //         ...state,
            //         filterTodo:[
            //             state.Todos.filter((todo) => !todo.completed)
            //         ]
            //     }
            //     break;
            // case filterType.ALL:
            //     return {
            //         ...state,
            //         filterTodo:state.Todo
            //     }
        default:
            return state

    }
}
