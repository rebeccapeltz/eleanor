import "./Message.css";
function Message(item) {
  // Exect 1 of 3 types: admin, client, response
  debugger;
  if (item.props.type == "admin") {
    if (item.props.bannedWords.length > 0) {
      const str1 = "We can not process and discuss input \
        containing: "
      return (
        <div>
          <div className="admin">Admin</div>
          <p className="msg">
            <span>We can not process and discuss input containing: </span>
            <span className="admin-banned">{item.props.bannedWords}</span>.
            <span> Update your input to exclude banned words.</span>
          </p> 
          <p>See list of banned words on Home page.</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="admin">Admin</div>
          <p className="msg">{item.props.content}</p>
        </div>
      );
    }
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
