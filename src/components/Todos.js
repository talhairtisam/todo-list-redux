import React from 'react';
import Todo from './Todo';

function Todos(){
    return (
        <div className='Todos'>
            <ul>
                <Todo key="1" text="computer is full"/>
           
                <Todo key="2" text="cook dinner" />
  
                <Todo key="3" text="go for shopping with titu" />

                <Todo key="4" text="clean PC" />
            </ul>
            
            
            
            


        </div>
    );
}

export default Todos;