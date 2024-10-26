import "./Message.css";
function Message(item) {
  //   debugger;
  if (item.props.type == "admin") {
    return (
      <div>
        <div className="msg">Admin</div>
        <p style={{ color: "green" }}>{item.props.content}</p>
      </div>
    );
  } else if (item.props.type == "question") {
    return (
      <div>
        <div className="msg">User</div>
        <p style={{ color: "green" }}>{item.props.content}</p>
      </div>
    );
  } else if (item.props.type == "response") {
    return (
      <div>
        <div className="msg">Eleanor</div>
        <p style={{ color: "green" }}>{item.props.content}</p>
      </div>
    );
  }
}

export default Message;
