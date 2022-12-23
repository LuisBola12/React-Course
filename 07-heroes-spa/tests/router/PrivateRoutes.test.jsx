import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "./../../src/router/PrivateRoute";

describe("Pruebas sobre el componente Private Routes", () => {
  test("Debe de mostar el children si esta autenticado", () => {
    const contextValue = { logged: true, user: { id: "13", name: "Luis" } };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Esto es una ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Esto es una ruta privada")).toBeTruthy();
  });
  test("Debe de asegurarse de que el localstorage haya sido llamado", () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = { logged: true, user: { id: "13", name: "Luis" } };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Esto es una ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
