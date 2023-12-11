// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";

import { Header } from "./componenets/Header";
import { UserForm } from "./componenets/UserForm";
import { UserList } from "./componenets/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Header />
      <div>
        <UserList />
        <UserForm onAddUser={handleAddUser} />
      </div>

      {/* <div className="display-users">
        <a href="#">Display Users</a>
      </div>
      <div className="users">
        <p className="firstname"></p>
        <p className="lastname"></p>
        <p className="email"></p>
        <p className="telephone"></p>
        <button>Remove User</button>
      </div> */}
    </>
  );
};

export default App;
