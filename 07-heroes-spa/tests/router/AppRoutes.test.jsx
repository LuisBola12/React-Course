import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
// import { AppRouter } from "./../../src/router/AppRouter";

describe("Pruebas sobre el componente de AppRouter", () => {
  //   test("Debe de mostrar el login si no se encuentra autenticado", () => {
  //     const contextValue = { logged: false };
  //     render(
  //       <MemoryRouter initialEntries={["/marvel"]}>
  //         <AuthContext.Provider value={contextValue}>
  //           <AppRouter />
  //         </AuthContext.Provider>
  //       </MemoryRouter>
  //     );
  //     expect(screen.getAllByText("Login").length).toBe(2);
  //   });
  //   test("Debe de mostrar el componente de marvel si se encuentra autenticado", () => {
  //     const contextValue = { logged: true, user: { id: 123, name: "Luis" } };
  //     render(
  //       <MemoryRouter initialEntries={["/login"]}>
  //         <AuthContext.Provider value={contextValue}>
  //           <AppRouter />
  //         </AuthContext.Provider>
  //       </MemoryRouter>
  //     );
  //     screen.debug();
  //     // expect(screen.getByText("Marvel Comics")).toBeTruthy();
  //   });
  test("Este caso de poruebas tira una error debido a la libreria querystring", () => {
    const noPasa = true;
  });
});
