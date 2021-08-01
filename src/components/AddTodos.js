import React from 'react';

function AddTodos(){
    return (
        <div className='AddTodos'>
            <input type="text" name="newTask" placeholder="New Task" className="newTaskText" />
                <button className="addBtn">
                    <i className="fas fa-plus-square fa-lg "></i>
                </button>
            
        </div>
    );
}

export default AddTodos;