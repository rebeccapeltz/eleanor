import './ScrollableList.css';
import React, { useState } from "react";

function ScrollableList({ bannedWords }) {
  // debugger;
  const bandWordsArr = Object.keys(bannedWords);

  return (
    <div className="bannedlist-column">
        
      <h3 className="bannedlist-header">Banned Words List</h3>
      <textarea
        value={bandWordsArr.join("\n")}
        readOnly
        className="bannedlist"
      />
    </div>
  );
}

export default ScrollableList;
