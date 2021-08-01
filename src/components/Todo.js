import React from 'react';

function Todo({ text }){
    return (
        <div className='Todo'>
            <li className="taskText">{text}</li>
            <button className="checkBtn">
                <i className="fas fa-check fa-lg "></i>
            </button>
            <button className="trashBtn">
                <i className="fas fa-trash fa-lg "></i>
            </button>
        </div>
    );
}

export default Todo;