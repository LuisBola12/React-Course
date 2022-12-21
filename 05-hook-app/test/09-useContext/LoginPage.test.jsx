import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "./../../src/09-useContext/LoginPage";
describe("Purebas en el componente HomePage", () => {
  test("Debe de mostrar e componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  test("Debe de mostrar e componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: "Pedro" }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain("Pedro");
  });
  test("Debe de mostrar e componente con el usuario", () => {
    const mockButtonFunc = jest.fn();
    render(
      <UserContext.Provider value={{ user: "Pedro", setUser: mockButtonFunc }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockButtonFunc).toHaveBeenCalled();
    expect(mockButtonFunc).toHaveBeenCalledWith({
      id: 123,
      email: "luis@gamil.com",
      name: "Luis Bolanos",
    });
  });
});
