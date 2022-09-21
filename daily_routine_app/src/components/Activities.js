import React from "react";
import ActivityItem from "./ActivityItem";

const Activities =(props) =>{
    return(
        <div className="container mt-2">
           
        <div className="card bg-secondary" style={{width:'550px'}}>
        <div className="card-body">
         <h4 className="card-title" style={{color:"white"}}>My Daily Routine</h4>
            {props.items.map(item=>{
                return <ActivityItem key={item.id} title={item.title} time={item.time}/>
            })}
            </div>
        </div>
        </div>
        
    )
}

export default Activities;