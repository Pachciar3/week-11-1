import React from "react";

import UsersEl from './UsersEl';

function UsersList({ data }) {
  return (
    <ol className="users__list">
      {data && data.map((user) => (
        <UsersEl key={user.login.uuid} user={user} />
      ))}
    </ol>
  );
}
export default UsersList;
