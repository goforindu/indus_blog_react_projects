import React, {useState} from 'react';

const User=props=>{

  const [email, setEmail]=useState(props.email);
  
  const myClickHandler=()=>{
    setEmail("indukush@gmail.com");
    console.log("email updated");
  }

    return(
        <div className="container mt-3">
          <div className="card bg-light" style={{width:'250px'}}>
          <div className="card-body">
          <img className="card-img-left" src={props.profile_pic} alt="Card image" style={{width:'50%'}}/>
           <h4 className="card-title">User Profile</h4>
            <p className="card-text">{props.name}</p>
             <p className="card-text">{email}</p>
            <button onClick={myClickHandler} className="btn btn-primary">update</button>
           </div>
        </div>
        <br/>
        </div>
    )
}

export default User;