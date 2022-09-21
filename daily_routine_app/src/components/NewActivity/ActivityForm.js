import React, {useState} from 'react';

const ActivityForm= (props)=>{
/**Initialise state for name email and profile pic */
const [enteredName, setEnteredName]=useState("");
const [enteredTime, setEnteredTime]=useState("");

const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
}

const timeChangeHandler=(event)=>{
    
        
        setEnteredTime(event.target.value);
      
   
}
 


const submitHandler=(event)=>{
    event.preventDefault();
    const activityData={
        id:Math.random(),
        title:enteredName,
        time:enteredTime
        };
        props.onCreateActivity(activityData);
}
    return(
        <form action="" onSubmit={submitHandler} className="container mt-3">
        <div className="mb-3">
           <label htmlFor="name" className="form-label">Title:</label>
           <input type="text" className="form-control" 
           id="name" placeholder="Enter activity" name="name"
           value={enteredName} onChange={nameChangeHandler}/>
       </div>
       <div className="mb-3 mt-3">
           <label htmlFor="time" className="form-label">Time:</label>
           <input type="time" className="form-control" 
           id="time"  name="time"
           value={enteredTime} onChange={timeChangeHandler}/>
       </div>
            <button type="submit" className="btn btn-primary">Add Activity</button>
        </form>
    );
}

export default ActivityForm;