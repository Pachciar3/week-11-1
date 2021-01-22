import React from "react";
import { connect } from "react-redux";
import { addMessage, removeMessage } from "../redux";

import MessagesList from "../components/MessagesList"

function Messages({ messages, remove }) {
  return (
    <MessagesList messages={messages} remove={remove} />
  );
}

function mapStateToProps(state) {
  return {
    messages: state.ui.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => dispatch(addMessage(data)),
    remove: (data) => dispatch(removeMessage(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
