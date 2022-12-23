import { types } from "./../../../src/auth/types/types";
describe("Pruebas sobre los types.js", () => {
  test("Debe de regresar los types establecidos", () => {
    expect(types).toEqual({
      login: "[AUTH] Login",
      logout: "[AUTH] Logout",
    });
  });
});
