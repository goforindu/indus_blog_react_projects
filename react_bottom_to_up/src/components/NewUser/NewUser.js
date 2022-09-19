import React from 'react';
import UserForm from './UserForm';

const NewUser = (props) =>{
    const createUserHandler=(user_data)=>{
        console.log(user_data);
        props.onAddUser(user_data);
    }
    return(
        <div className="container mt-3">
        <div className="card bg-light" style={{width:'550px'}}>
        <div className="card-body">
         <h4 className="card-title">User Profile</h4>
         <UserForm onCreateUser={createUserHandler}/>
         </div>
         </div>
         <br/>
      </div>
    )
}
export default NewUser;