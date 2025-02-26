import React, { useState } from "react";

const TodoItem = ({ item, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const handleChange = () => {
    dispatch({
      type: "CHECKBOX",
      payload: { ...item, completed: !item.completed },
    });
  };

  const handleSave = () => {
    dispatch({ type: "EDIT", payload: { ...item, title: newTitle } });
    setIsEditing(false);
  };
  return (
    <div className="border flex gap-4 m-4 p-4 items-center ">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      {isEditing ? (
        <input
          className="border p-2"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <h4
          className={`text-lg font-medium ${item.completed && "line-through"}`}
        >
          {item.title}
        </h4>
      )}
      {isEditing ? (
        <button
          className="bg-black text-white px-4 py-1 rounded-full text-xs"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <>
          <button
            className="bg-black text-white px-4 py-1 rounded-full text-xs"
            disabled={item.completed}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
          <button
            className="bg-black text-white px-4 py-1 rounded-full text-xs"
            onClick={() => dispatch({ type: "DELETE", payload: { ...item } })}
            disabled={!item.completed}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
