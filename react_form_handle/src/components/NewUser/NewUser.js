import React from 'react';
import UserForm from './UserForm';

const NewUser = () =>{
    return(
        <div className="container mt-3">
        <div className="card bg-light" style={{width:'550px'}}>
        <div className="card-body">
         <h4 className="card-title">User Profile</h4>
         <UserForm/>
         </div>
         </div>
         <br/>
      </div>
    )
}
export default NewUser;