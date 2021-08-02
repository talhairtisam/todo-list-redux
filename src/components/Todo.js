import React from 'react';
import { connect } from 'react-redux';
import { CompletedTodoAction,DeleteTodoAction } from '../redux/actions';

function Todo({ todo,completeToggle,deleteTask }){
    return (
        <div className='Todo'>
            <li className={`taskText ${todo.completed ? "completed" : "" }`}>{todo.text}</li>
            <button 
            className="checkBtn"
            onClick={()=>completeToggle(todo.id)}
            >
                <i className="fas fa-check fa-lg "></i>
            </button>
            <button 
            className="trashBtn"
            onClick={()=>deleteTask(todo.id)}
            >
                <i className="fas fa-trash fa-lg "></i>
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeToggle:(id) => dispatch(CompletedTodoAction(id)),
        deleteTask: (id) => dispatch(DeleteTodoAction(id))
    }
}


export default connect(null,mapDispatchToProps)(Todo);