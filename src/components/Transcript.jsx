import MessageList from "./MessageList";
function Transcript(messageItems) {
    // debugger
  return (
    <div className="transcript">
      {/* {transcript} */}
      <MessageList items={messageItems.items} />
    </div>
  );
}
export default Transcript;
