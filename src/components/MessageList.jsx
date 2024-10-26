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
  // const [items, setItems] = useState([]);

  // const addItem = (newItem) => {
  //   // Create a new item object with a unique key
  //   const newItemWithKey = { id: Date.now(), value: newItem };

  //   // Update the state by adding the new item to the list
  //   setItems([...items, newItemWithKey]);
  // };
  // debugger
  return (
    <>
      <div  className="msg-list">
        {/* <input type="text" placeholder="Add item" />
      <button onClick={() => handleAddItem(newItem)}>Add</button> */}

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Message props={item} />
            </li>
            // <li key={index}>{item.type}</li>
          ))}
        </ul> 
        <div ref={messagesEndRef}></div>

      </div>
    </>
  );
}
export default MessageList;
