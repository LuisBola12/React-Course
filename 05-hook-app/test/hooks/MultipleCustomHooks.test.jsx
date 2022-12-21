import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "./../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "./../../src/hooks/useCounter";
import { useFetch } from "./../../src/hooks/useFetch";

jest.mock("./../../src/hooks/useFetch");
jest.mock("./../../src/hooks/useCounter");

describe("Pruebas en el componente MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    screen.getByText("Loading...");
    const nextButton = screen.getByRole("button", { name: "Next Berry" });
    expect(nextButton.disabled).toBeTruthy();
  });
  test("Debe de mostar una fruta pokemon", () => {
    useFetch.mockReturnValue({
      data: { name: "berry-berry", item: { name: "berry-flavour" } },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("berry-flavour")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next Berry" });
    expect(nextButton.disabled).toBeFalsy();
  });
  test("Debe de llamar a la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: { name: "berry-berry", item: { name: "berry-flavour" } },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Berry" });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalledTimes(2);
  });
});
