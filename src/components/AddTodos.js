import React,{ useState } from 'react';
import { AddTodoAction } from '../redux/actions';
import { connect } from 'react-redux';

function AddTodos({addTodo}){
    const [text,setText] = useState(""); 
    const handleInput =(e) =>{
        setText(e.target.value);
    }
    return (
        <div className='AddTodos'>
            <input value={text} type="text" onChange={handleInput} name="newTask" placeholder="New Task" className="newTaskText" />
                <button 
                className="addBtn"
                onClick={() => {
                    addTodo(text);
                    setText("");
                }}
                >
                    <i className="fas fa-plus-square fa-lg "></i>
                </button>
            
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (text) => dispatch(AddTodoAction(text))
    }
}

export default connect(null,mapDispatchToProps)(AddTodos);