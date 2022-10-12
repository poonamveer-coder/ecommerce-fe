import React, { useState } from "react";

const SearchBox = ({ onSubmitKeyword }) => {
  const [text, setText] = useState("");
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitKeyword(text);
      }}
    >
      <div>
        {" "}
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchBox;
