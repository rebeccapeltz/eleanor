import "./Message.css";
function Message(item) {
  //   debugger;
  if (item.props.type == "admin") {
    return (
      <div>
        <div className="admin">Admin</div>
        <p className="msg">{item.props.content}</p>
      </div>
    );
  } else if (item.props.type == "client") {
    return (
      <div>
        <div className="client">Client</div>
        <p className="msg">{item.props.content}</p>
      </div>
    );
  } else if (item.props.type == "response") {
    return (
      <div>
        <div className="eleanor">Eleanor</div>
        <p className="msg">{item.props.content}</p>
      </div>
    );
  }
}

export default Message;
