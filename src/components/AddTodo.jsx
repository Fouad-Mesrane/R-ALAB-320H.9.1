import React, { useState } from "react";

const AddTodo = ({dispatch}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault()
     dispatch({type : "ADD", payload : input})
     setInput("")
  }
  return (
    <form onSubmit={handleSubmit} className="mx-4">
      <input
        className="border border-black px-4 "
        type="text"
        name=""
        id=""
        onChange={(e) => setInput(e.target.value)}
        value={input}    
      />
      <button type="submit" className="bg-black px-4 text-white ml-2 rounded-full py-1 text-xs font-medium">Add</button>
    </form>
  );
};

export default AddTodo;
