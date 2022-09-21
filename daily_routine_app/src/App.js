import React, {useState} from 'react';
import './App.css';
import Activities from './components/Activities';
import NewActivity from './components/NewActivity/NewActivity';

const activitiesData=[
  {
    id:3,
    title:"Get ready",
    time:"7:00"
  },
  {
    id:2,
    title:"yoga",
    time:"6:30"
  },
  {
    id:1,
    title:"wake up",
    time:"6:00"
  }
]

function App() {

  const [activities,setActivities]=useState(activitiesData);
 
  const addActivityHandler=(activity_data)=>{
   setActivities(prevActivity=>{
    return [activity_data, ...prevActivity];
   })
  }
  return (
    <div className="App">
      <NewActivity onAddActivity={addActivityHandler}/>
      <Activities items={activities}/>
    </div>
  );
}

export default App;
