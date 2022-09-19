import './App.css';
import User from './components/User';
import NewUser from './components/NewUser/NewUser';

function App() {
  const user=[{
    name:"indu kushwaha",
    email:"goforindu@gmail.com",
    profile_pic:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61f1b112-2cb0-40b0-a6b9-9ab92066e5c7/d33mwsf-0dd81126-6d91-4b0d-905c-886a1a41566c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82MWYxYjExMi0yY2IwLTQwYjAtYTZiOS05YWI5MjA2NmU1YzcvZDMzbXdzZi0wZGQ4MTEyNi02ZDkxLTRiMGQtOTA1Yy04ODZhMWE0MTU2NmMucG5nIn1dXX0.1vwL8FOjsywblgj9w4zBe3Cakiyvmmi412HCfZgfM60"
  },
{
  name:"Advik Kushwaha",
  email:"advik@gmail.com",
  profile_pic:"https://www.tuktukdesign.com/wp-content/uploads/2020/01/employee-icon-vector.jpg"
}];

const addUserHandler=(user_data)=>{
  console.log(user_data);
  user.push(user_data);
  console.log(user);
}

  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler}/>
       <User name={user[0].name} email={user[0].email} profile_pic={user[0].profile_pic}/>
       <User name={user[1].name} email={user[1].email} profile_pic={user[1].profile_pic}/>
    </div>
  );
}

export default App;
