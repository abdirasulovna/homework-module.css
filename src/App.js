import { useState } from "react";
import "./App.css";
import { UserForm } from "./components/form-list/UserForm";
import { User } from "./components/users/User";

function App() {
  const [users, setUsers] = useState([]);
  const addNewUsersHandler = (data) => {
    const upDatedUsers = [...users];
    upDatedUsers.push(data);
    setUsers(upDatedUsers);
  };
  users.sort((a, b) => {
    return b.age - a.age;
  });
  return (
    <div className="apps">
      <div className="items">
        <UserForm onNewUsersAdd={addNewUsersHandler} />
        <User expenses={users} />
      </div>
    </div>
  );
}

export default App;
