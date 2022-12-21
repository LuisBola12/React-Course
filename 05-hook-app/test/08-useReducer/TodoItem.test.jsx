import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/Components/TodoItem";
describe("Pruebas en el componente TodoItem", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };
  const onDeleteToDoMock = jest.fn();
  const onToggleToDoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleToDoMock}
        onDeleteTodo={onDeleteToDoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between mt-2"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
  });
  test("debe de mostrar el todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleToDoMock}
        onDeleteTodo={onDeleteToDoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("debe de llamar al ontoggletodo cuando se clickea dos veces", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleToDoMock}
        onDeleteTodo={onDeleteToDoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.doubleClick(spanElement);
    expect(onToggleToDoMock).toHaveBeenCalledWith(1);
  });
  test("debe de llamar al deletetodo cuando se clickea el boton", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleToDoMock}
        handleRemoveTodo={onDeleteToDoMock}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteToDoMock).toHaveBeenCalledWith(1);
  });
});
