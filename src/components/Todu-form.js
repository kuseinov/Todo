import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const hendleCange = (e) => {
    setUserInput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const result = addTask(userInput);
    if (result) setUserInput("");
  };

  const hendelKeyPress = (e) => {
    if (e.key === "Enter") {
      handelSubmit(e);
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={hendleCange}
        onKeyDown={hendelKeyPress}
        placeholder="hh"
      />
      <button type="submit">add</button>
    </form>
  );
}
export default ToDoForm;
