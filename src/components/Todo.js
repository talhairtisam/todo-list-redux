import React from 'react';
import { connect } from 'react-redux';
import { CompletedTodoAction,DeleteTodoAction,DisplayAction } from '../redux/actions';

function Todo({ todo,completeToggle,deleteTask,Display }){
    return (
        <div className='Todo'>
            <li className={`taskText ${todo.completed ? "completed" : "" }`}>{todo.text}</li>
            <button 
            className="checkBtn"
            onClick={()=>{
                completeToggle(todo.id);
                Display();
            }}
            >
                <i className="fas fa-check fa-lg "></i>
            </button>
            <button 
            className="trashBtn"
            onClick={()=>{
                deleteTask(todo.id);
                Display();
            }}
            >
                <i className="fas fa-trash fa-lg "></i>
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeToggle:(id) => dispatch(CompletedTodoAction(id)),
        deleteTask: (id) => dispatch(DeleteTodoAction(id)),
        Display: () => dispatch(DisplayAction())
    }
}


export default connect(null,mapDispatchToProps)(Todo);