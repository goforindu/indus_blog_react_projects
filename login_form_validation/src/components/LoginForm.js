import React, {useState,useEffect} from 'react';

const LoginForm= ()=>{
    const initialFormValues={username:'', email:'', password:''};
    const [enteredFormValues,setEnteredFormValues]=useState(initialFormValues);
    const[formValidationErrors, setFormValidationErrors]=useState({});
    const[isFormSubmit,setIsFormSubmit]=useState(false);

    const changeHandler=(event)=>{
        const {name, value}=event.target;
        setEnteredFormValues({...enteredFormValues, [name]:value})
    }

    useEffect(()=>{
        if(Object.keys(formValidationErrors).length === 0 && isFormSubmit){
            console.log("Form submitted successfully");
        }

    },[formValidationErrors,isFormSubmit])

    const submitHandler=(event)=>{
        event.preventDefault();
        setFormValidationErrors(validateFormValues(enteredFormValues));
       setIsFormSubmit(true);
    }

    const validateFormValues=(formsObj)=>{
        const validationErrors={};
        const email_regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!formsObj.username){
            validationErrors.username="Please enter the username";
        }
        if(!formsObj.email){
            validationErrors.email="Please enter the email";
        } else if(!email_regex.test(formsObj.email)){
            validationErrors.email="Please enter valid email id";
        }
       
        if(!formsObj.password){
            validationErrors.password="Please enter the password";
        }
        return validationErrors;
    }
    return(
        <div className="container mt-3 pb-3 card bg-light" style={{width:'550px'}}>
             <form onSubmit={submitHandler}>
             <div className="mb-3 mt-3">
                <h3>Login Form</h3>
      <label htmlFor="username">Username:</label>
      <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={enteredFormValues.username} onChange={changeHandler}/>
        <p style={{color:"red"}}>{formValidationErrors.username}</p>
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={enteredFormValues.email} onChange={changeHandler}/>
      <p style={{color:"red"}}>{formValidationErrors.email}</p>
    </div>
    <div className="mb-3">
      <label htmlFor="password">Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={enteredFormValues.password} onChange={changeHandler}/>
      <p style={{color:"red"}}>{formValidationErrors.password}</p>
    </div>
    <button className="btn btn-primary">Submit</button>
  </form>
        </div>
    )
}

export default LoginForm;