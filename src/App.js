import { useEffect, useState } from 'react';
import './App.css';
import Users from './Components/Users.js';
import axios from 'axios';
import Display from './Components/Display';
import DisplayUser from './Components/DisplayUser';

const ip = '13.49.228.212';

const getData = (setallUsersJson) => {  
  axios.get('http://' + ip + ':8080/getAllUsers')
  .then(function (response) {
    console.log(response);
    setallUsersJson(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const postData = (data,setallUsersJson) =>
{
  const obj = {
    id: data.id,
    name: data.name,
    email: data.email,
    phone_no: data.phone_no
  };
  axios.post('http://' + ip + ':8080/user',obj)
  .then(function (response){
    console.log(response);
    getData(setallUsersJson);
  })
  .catch(function (error){
    console.log(error);
  });
}

const putData = (data,setallUsersJson) =>
{
  const obj = {
    id: data.id,
    name: data.name,
    email: data.email,
    phone_no: data.phone_no
  };
  console.log("inside update");
  console.log(obj);
  
  axios.put('http://' + ip + ':8080/updateUser/' + obj.id,obj)
  .then(function (response){
    console.log(response);
    getData(setallUsersJson);
  })
  .catch(function (error)
  {
    console.log(error);
  })
}

const deleteData = (user,setallUsersJson) =>
{
  console.log("deleting");
  console.log(user);
  axios.delete('http://' + ip + ':8080/deleteUser/'+user.id)
  .then(function(response)
  {
    console.log(response);
    getData(setallUsersJson);
  })
  .catch(function(error)
  {
    console.log(error);
  });
}

function App() {  
  const [allUsersJson,setallUsersJson] = useState({});
  const [userForm,setUserForm] = useState(false);
  const [allUsers,setAllUsers] = useState(true);
  const [user,setUser] = useState({name: "",email: "",phone_no: ""});
  const [update,setUpdate] = useState(false);
  
  useEffect(
    () => {
      getData(setallUsersJson);
    },
    []
  );

  useEffect(
    () => {
      console.log(user);
    },
    [user]
  );

  const switchToUserForm_add = () =>
  {
    setUpdate(false);
    setUser({name: "",email: "",phone_no: ""})
    setUserForm(true);
    setAllUsers(false);
  }
  const switchToUserForm_update = (user) =>
  {
    setUpdate(true);
    setUser(user);
    setUserForm(true);
    setAllUsers(false);
  }
  const switchToAllUsers = () =>
  {
    setUserForm(false);
    setAllUsers(true);
  }

  const addUser = () =>
  {
    console.log(user);
    postData(user,setallUsersJson);
    switchToAllUsers();
  }
  const updateUser = () =>
  {
    console.log(user);
    putData(user,setallUsersJson);
    switchToAllUsers();
  }
  const deleteUser = (user) =>
  {
    deleteData(user,setallUsersJson);

  }
  return (
    <div className="App">
    <Users switchMethod={switchToUserForm_add}/>
    
    <div className="viewSingleUser" style={{display: userForm? "block" : "none"}}>
    {update?
    <DisplayUser switchMethod={switchToAllUsers} user={user} setUser={setUser} isUpdate={true} addUser={addUser} updateUser={updateUser} back={switchToAllUsers}/>:
    <DisplayUser switchMethod={switchToAllUsers} user={user} setUser={setUser} isUpdate={false} addUser={addUser} updateUser={updateUser} back={switchToAllUsers}/>}
    </div>

    <div className="viewUsers" style={{display: allUsers? "block" : "none"}}>
    <Display data={allUsersJson} switchMethod={switchToUserForm_update} deleteUser={deleteUser}/>
    </div>

    </div>
  );
}

export default App;
