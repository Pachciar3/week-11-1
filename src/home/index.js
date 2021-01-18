import React from "react";
import { connect } from "react-redux";
import Message from '../components/Message';

import { fetchUsers, fetchUser, resetUsers } from '../users/redux';

function Home(props) {
  return (
    <div>
      <button onClick={props.fetchUsers}>Load</button>
      <button onClick={props.resetUsers}>Reset</button>
      <button onClick={props.addUser}>Add</button>
      {props.isLoading && <Message type="information">Loading ...</Message>}
      {props.isError && <Message type="error">Error occured</Message>}
      {props.isLoaded && <Message type="success">Loaded</Message>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
  isError: state.users.isError,
  isLoaded: state.users.isLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  resetUsers: () => dispatch(resetUsers()),
  addUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
