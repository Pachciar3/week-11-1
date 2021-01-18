import React from "react";

function UsersEl({ user }) {
  return (
    <li>
      {user.name.first} {user.name.last}
    </li>
  );
}
export default UsersEl;
