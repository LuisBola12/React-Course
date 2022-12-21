import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "./../../src/hooks/useForm";

describe("Pruebas enm el useForm", () => {
  const initialForm = {
    name: "Luis",
    email: "luis@gmail.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      email: initialForm.email,
      formState: initialForm,
      name: initialForm.name,
      onInputChange: expect.any(Function),
      onResetFormState: expect.any(Function),
    });
  });
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const target = { name: "name", value: "Alberto" };
    act(() => {
      const event = { target };
      onInputChange(event);
    });
    expect(result.current.name).toBe("Alberto");
    expect(result.current.formState.name).toBe("Alberto");
  });
  test("Debe de realizar el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetFormState } = result.current;
    const target = { name: "name", value: "Alberto" };
    act(() => {
      const event = { target };
      onInputChange(event);
      onResetFormState();
    });
    expect(result.current.name).toBe("Luis");
    expect(result.current.formState.name).toBe("Luis");
  });
});
