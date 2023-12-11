// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { addUser } from "../../UserServices/UserServices.jsx";

// eslint-disable-next-line react/prop-types
const UserForm = ({ onAddUser }) => {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      name,
      email,
      phone,
    };

    try {
      const addedUser = await addUser(newUser);
      onAddUser(addedUser);

      setUserName("");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>User-Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
