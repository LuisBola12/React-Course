import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "./../../src/hooks/useCounter";

describe("Pruebas sobre el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("Debe de generar un counter con el valor de 100 ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("Debe de incrementar el contador cuando se use la funcion increment ", () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(13);
  });
  test("Debe de resetear el contador cuando se use la funcion reset ", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement, reset } = result.current;
    act(() => {
      decrement();
      decrement(2);
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
  test("Debe de decrementar el contador cuando se use la funcion decrement ", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(7);
  });
});
