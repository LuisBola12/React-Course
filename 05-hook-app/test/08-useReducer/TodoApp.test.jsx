import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "./../../src/hooks/useTodo";
jest.mock("./../../src/hooks/useTodo");
describe("Pruebas en el componente TodoAPP", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Hola #1", done: false },
      { id: 2, description: "Hola #2", done: false },
      { id: 3, description: "Hola #3", done: true },
    ],
    todosCount: 3,
    pendingTodos: 2,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test("Debe de mostar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("Hola #1")).toBeTruthy();
    expect(screen.getByText("Hola #2")).toBeTruthy();
    expect(screen.getByText("Hola #3")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
