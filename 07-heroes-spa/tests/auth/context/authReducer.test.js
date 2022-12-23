import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";
describe("Pruebas sobre el AuhtReducer", () => {
  const initialState = {
    logged: false,
  };
  test("Debe de retornar el estado por defecto una vez es creado", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("Debe de llamar el loggin y establecer el user", () => {
    let newState = authReducer(initialState, {});
    const user = { id: 123, name: "Luis Bolanos" };
    const action = {
      type: types.login,
      payload: user,
    };
    newState = authReducer(initialState, action);
    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(user);
  });
  test("Debe de llamar el logout y borrar el user y logged en false", () => {
    let newState = authReducer(initialState, {});
    const user = { id: 123, name: "Luis Bolanos" };
    const action = {
      type: types.login,
      payload: user,
    };
    newState = authReducer(initialState, action);
    const actionToLogout = {
      type: types.logout
    };
    newState = authReducer(initialState, actionToLogout);
    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeUndefined()
  });
});
