import React from 'react';
import { connect } from 'react-redux';
import { changeFilter,DisplayAction  } from '../redux/actions';

function Filter({ filter,Display }){
    return (
        <div className='Filter'>
            <select 
            className="filterSelection"
            onChange={(e)=>{
                    filter(e.target.value);
                    Display();
                }
            }
            >
                <option 
                value="ALL"
                >ALL</option>
                <option 
                value="COMPLETED"
                >COMPLETED</option>
                <option 
                value="PENDING"
                >PENDING</option>
                
            </select>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (e) => dispatch(changeFilter(e)),
        Display: () => dispatch(DisplayAction())
        
    }
}

export default connect(null,mapDispatchToProps)(Filter);