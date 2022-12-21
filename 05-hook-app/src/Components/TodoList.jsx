import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleRemoveTodo,onToggleTodo }) => {
  return (
    <>
      <ul className="list-gr">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo}handleRemoveTodo={handleRemoveTodo} />
        ))}
      </ul>
    </>
  );
};
