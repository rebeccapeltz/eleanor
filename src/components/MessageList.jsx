import "./MessageList.css";
import React, { useEffect, useRef } from "react";
import Message from "./Message";

function MessageList({ items }) {
  // scroll to bottom
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [items]);
 
  return (
    <>
      <div  className="msg-list">

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Message props={item} />
            </li>
          ))}
        </ul> 
        <div ref={messagesEndRef}></div>

      </div>
    </>
  );
}
export default MessageList;
