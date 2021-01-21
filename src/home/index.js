import React from "react";
import { connect } from "react-redux";

import { fetchUsers, fetchUser, resetUsers } from '../users/redux';

function Home(props) {
  return (
    <div>
      <button onClick={props.fetchUsers}>Load</button>
      <button onClick={props.resetUsers}>Reset</button>
      <button onClick={props.addUser}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  resetUsers: () => dispatch(resetUsers()),
  addUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
