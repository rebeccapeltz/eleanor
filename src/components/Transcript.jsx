import MessageList from "./MessageList";
function Transcript(messageItems) {
    // debugger
  return (
    <div id="transcript" className="transcript">
      {/* {transcript} */}
      <MessageList items={messageItems.items} />
    </div>
  );
}
export default Transcript;
