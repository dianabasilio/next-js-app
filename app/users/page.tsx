import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  async function getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    const users = await response.json();
    return users; // this should be an array of User objects
  }

  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
