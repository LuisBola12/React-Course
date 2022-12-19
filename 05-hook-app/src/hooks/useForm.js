import React, { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };
  const resetFormState = () => {
    setFormState(initialForm);
  };
  return {
    formState,
    onInputChange,
    resetFormState
  };
};
