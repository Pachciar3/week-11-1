import React from "react";
import { connect } from "react-redux";
import { addMessage, removeMessage } from "../redux";

import Message from "../components/Message"

import './styles.scss';

function Messages({ messages, remove }) {
  const allmessages = messages && messages.map(message => <Message removeDelay="2000" handleRemove={() => remove(message.id)} key={message.id} type={message.type}>{message.text}</Message>)
  return (
    <div className="messages">
      {allmessages}
    </div>
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
