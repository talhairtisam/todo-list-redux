import React from 'react';

function Filter(){
    return (
        <div className='Filter'>
            <select className="filterSelection">
                <option value="ALL">ALL</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="PENDING">PENDING</option>
                
            </select>
        </div>
    );
}

export default Filter;