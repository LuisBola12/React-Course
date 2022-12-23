import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "./../../../src/ui/components/Navbar";
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
describe("Pruebas sobre el componente de Navbar", () => {
  const logoutJestFn = jest.fn();
  const contextValue = {
    user: { id: "13", name: "Luis" },
    setLogout: logoutJestFn,
  };
  beforeEach(() => jest.clearAllMocks());
  test("Verificar que el nombre de la persona aparece en el Navbar", () => {
    const contextValue = { logged: true, user: { id: "13", name: "Luis" } };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Luis")).toBeTruthy();
  });
  test("Verificar que el nombre de la persona aparece en el Navbar", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(logoutJestFn).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});
