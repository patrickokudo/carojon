// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../../UserServices/UserServices";
import "./index.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li className="users" key={user.id}>
            <p>{user.username}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <button onClick={() => handleDelete(user.id)}>Remove User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
