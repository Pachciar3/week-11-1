import React, { useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import UsersList from "../components/UsersList";
import { fetchUsers } from "../redux";

function Users(props) {
  const { fetchUsers, isError, users, isLoading } = props;
  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, [fetchUsers, users]);

  return (
    <>
      {(users.length > 0) && <UsersList data={users} />}
      {isError && <Message type="error">Something get wrong. Sorry</Message>}
      {isLoading && <Loader />}
    </>
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
