import React, { useState } from 'react';
import ReactDOM from "react-dom";
import List from "./components/List";
import ListForm from "./components/ListForm";
import './App.css';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Timmy Harris",
      email: "timmy@gmail.com",
      role: "Backend Engineer"
  },
  {
    id: 2,
    name: "Jonathan Brown",
    email: "jonny@hotmail.com",
    role: "Frontend Engineer"
}
])

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
  };
    setList([...list, newMember])
};


  return (
    <div className="App">
      <header className="App-header">
      <h1>Team Builder</h1>
      </header>
      <div className = "App-body">
        <div className = "App-components">
      <ListForm addNewMember = {addNewMember}/>
      <List list = {list}/>
      </div>
      </div>
    </div>
  );
}

export default App;
