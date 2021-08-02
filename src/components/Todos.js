import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';



function Todos({todos}){
    return (
        <div className='Todos'>
            <ul>
                {
                    todos.map((todo)=>(
                        <Todo key={todo.id} text={todo.text} />
                    ))
                }
            </ul>
            
        </div>
    );
}

const mapStatesToProps = (state) => {
    return {
        todos: state.Todo
    }
}

export default connect(mapStatesToProps)(Todos);