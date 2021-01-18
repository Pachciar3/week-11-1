import React, { useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import UsersList from "../components/UsersList";
import { fetchUsers } from "../redux";

function Users(props) {
  const { fetchUsers, isLoading, isError, users } = props;
  console.log(users);
  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, [fetchUsers, users]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) { return <Message type="error">Something get wrong. Sorry</Message> };

  return (
    <div className="users">
      <h2>Users</h2>
      <UsersList data={users} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
