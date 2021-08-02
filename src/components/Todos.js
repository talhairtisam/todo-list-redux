import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';



function Todos({todos}){
    return (
        <div className='Todos'>
            <ul>
                {
                    todos.map((todo)=>(
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </ul>
            
        </div>
    );
}

const mapStatesToProps = (state) => {
    return {
        todos: state.filterTodo
    }
}

export default connect(mapStatesToProps)(Todos);