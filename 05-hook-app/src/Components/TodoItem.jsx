import React from "react";

export const TodoItem = ({ todo, handleRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between mt-2">
      <span
        aria-label="span"
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onDoubleClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleRemoveTodo(todo.id);
        }}
      >
        Borrar
      </button>
    </li>
  );
};
