import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users);
  const userCount = useSelector((state)=> state.users.length)

  let usernames = users.map((user) => {
    return (
      <li key = {user.username}>{user.username}</li>
    )
  })
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {usernames}
        {/* In addition, display the total number of users curently in the store */}

      </ul>
        Total Users: {users.length}
        {/* Total Users: {userCount} */}
    </div>
  );
}

export default Users;
