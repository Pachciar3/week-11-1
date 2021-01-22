import React from "react";

import Message from "./Message";

function MessagesList({ messages, remove }) {
  const allmessages = messages && messages.map(message => <Message removeDelay="2000" handleRemove={() => remove(message.id)} key={message.id} type={message.type}>{message.text}</Message>)
  return (
    <div className="messages">
      {allmessages}
    </div>
  )
}

export default MessagesList