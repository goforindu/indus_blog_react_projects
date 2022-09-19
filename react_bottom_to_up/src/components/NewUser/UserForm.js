import React, {useState} from 'react';

/* here I get the props */
const UserForm= (props)=>{
    
/**Initialise state for name email and profile pic */
const [enteredName, setEnteredName]=useState("");
const [enteredEmail, setEnteredEmail]=useState("");
const [enteredProfilePic, setEnteredProfilePic]=useState("");

const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
}

const emailChangeHandler=(event)=>{
    setEnteredEmail(event.target.value);
}
const profilePicChangeHandler=(event)=>{
    setEnteredProfilePic(event.target.value);
}

const submitHandler=(event)=>{
    event.preventDefault();
    const userData={
        name:enteredName,
        email:enteredEmail,
        profile_pic:enteredProfilePic
    };
    /*here we call parents function and sending data to it */
    props.onCreateUser(userData);
   // console.log(userData);
}
    return(

<form action="" onSubmit={submitHandler} className="container mt-3">
             <div className="mb-3">
                <label for="name" className="form-label">Name:</label>
                <input type="text" className="form-control" 
                id="name" placeholder="Enter name" name="name"
                value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div className="mb-3 mt-3">
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" 
                id="email" placeholder="Enter email" name="email"
                value={enteredEmail} onChange={emailChangeHandler}/>
            </div>
            <div className="mb-3">
                <label for="profile_pic" className="form-label">Profile Pic:</label>
                <input type="text" className="form-control" 
                id="profile_pic" placeholder="Enter image url" name="profile_pic"
                value={enteredProfilePic} onChange={profilePicChangeHandler}/>
            </div>
                 <button type="submit" className="btn btn-primary">Add User</button>
             </form>
                 
    )
}

export default UserForm;