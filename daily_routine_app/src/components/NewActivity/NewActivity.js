import React from 'react';
import ActivityForm from './ActivityForm';

const NewActivity = (props) =>{
    const createActivityHandler=(activity_data)=>{
        console.log(activity_data);
        props.onAddActivity(activity_data);
    }
    return(
        <div className="container mt-3">
        <div className="card bg-light" style={{width:'550px'}}>
        <div className="card-body">
         <h4 className="card-title">Activity Form</h4>
         <ActivityForm onCreateActivity={createActivityHandler}/>
         </div>
         </div>
         <br/>
      </div>
    )
}
export default NewActivity;