import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoutes } from "./../../src/router/PublicRoutes";

describe("Pruebas en el componente PublicRoutes", () => {
  test("Si no esta autenticado debe de mostrar el children", () => {
    const contextValue = { logged: false };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Esto es una ruta pública</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Esto es una ruta pública")).toBeTruthy();
  });
  test("Debe de navegar si esta autenticado", () => {
    const contextValue = { logged: true, user: { id: 123, name: "luisbola" } };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoutes>
                  <h1>Esto es una ruta pública</h1>
                </PublicRoutes>
              }
            />
            <Route path="marvel" element={<h1>Página marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Página marvel")).toBeTruthy();
  });
});
