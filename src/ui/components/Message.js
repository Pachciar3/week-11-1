import React, { useState, useEffect } from "react";

import "./style.scss";

function Message({ children, type = "information", removeDelay, handleRemove }) {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(remove, removeDelay);
    return () => { clearTimeout(timeout); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeDelay])
  function remove() {
    setAnimation(true);
    setTimeout(handleRemove, 300);
  }
  return <div onClick={remove} className={`message ${type} ${animation && "hide"}`}>{children}</div>;
}

export default Message;
