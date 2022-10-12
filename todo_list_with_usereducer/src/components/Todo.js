import React, {useState, useReducer}from 'react';


const todoReducer = (state,action)=>{
   switch(action.type){
    case "ADD_TODO_ITEM":
     return {todos:[...state.todos, {title:action.payload, isCompleted:false}]};
    
    case "DELETE_TODO_ITEM":
        
       return {...state.todos, todos: state.todos.filter( (todos, index) => index !== action.payload ) }
       
    default: 
    return state;
   }
}

const Todo = ()=>{
    const [{todos},dispatch]=useReducer(todoReducer,{ todos:[] });
    const[enteredText,setEnteredText]=useState("");

    const changeHandler=(e)=>{
        setEnteredText(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch({type:"ADD_TODO_ITEM", payload:enteredText});
        setEnteredText("");
    }
    return(
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">Create Your Todo List</span>
        <div className="relative mt-4 bg-white shadow-lg sm:rounded-lg text-left">
          <div className="h-2 bg-green-600 rounded-t-md"></div>
          <div className="py-6 px-8">
            <form onSubmit={submitHandler}>
                <input type="text" 
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
                placeholder="Enter todo items" 
                value={enteredText}
                onChange={changeHandler}
                />
                <button type="submit"className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg">Add Item</button>
            </form>
            </div>
            </div>
            
            <ul className='relative mt-4 bg-white shadow-lg sm:rounded-lg text-left'>
              {todos.map((item, id)=>{return <div className='flex flex-row mt-2'><li className="basis-1/1 border mt-2 w-full  p-3 text-lg  hover:outline-none  rounded-lg" key={item.title}><b>{item.title}</b>
              
   
              </li>
              
              <button className=" basis-1/6 bg-green-600 text-white  rounded-md"
              onClick={()=>{dispatch({type:'DELETE_TODO_ITEM',payload:id})}}>delete</button>
              </div>
            })}  
                </ul>
                
        </div>
        
    );
}

export default Todo;