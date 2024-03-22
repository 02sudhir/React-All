# React + Vite

passwordGEn

Understanding useEffect :


The useEffect hook is used to perform side effects in functional components, such as fetching data, setting up event listeners, or updating the DOM. It serves as a replacement for the lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.




Using useEffect with Dependencies
In some cases, you may want your side effect to run whenever a specific value changes. To do this, you can pass an array of dependencies as the second argument to useEffect. The side effect will only run when one of the dependencies changes.


import React, { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
