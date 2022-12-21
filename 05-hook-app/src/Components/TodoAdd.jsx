import { React, useState } from "react";
import { useForm } from "./../hooks/useForm";

export const TodoAdd = ({ placeholder, onNewTodo }) => {
  const { description, onInputChange, onResetFormState } = useForm({
    description: "",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() + 300,
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetFormState();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={description}
          name="description"
          className="form-control"
          onChange={onInputChange}
        />
        <button className="btn btn-outline-primary mt-1">Agregar</button>
      </form>
    </>
  );
};
