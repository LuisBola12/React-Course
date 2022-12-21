import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "../Components/TodoAdd";
import { TodoList } from "../Components/TodoList";
import { useTodo } from "./../hooks/useTodo";

export const TodoApp = () => {
  const { todos,todosCount,pendingTodos, handleNewTodo, handleRemoveTodo, handleToggleTodo } =
    useTodo();
  return (
    <>
      <h1>Todo App: {todosCount}, pendientes: {pendingTodos}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onToggleTodo={handleToggleTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd
            placeholder={"Que hay que hacer?"}
            onNewTodo={handleNewTodo}
          />
        </div>
      </div>
    </>
  );
};
