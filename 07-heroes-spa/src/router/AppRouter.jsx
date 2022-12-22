import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/";
import { HeroesRoutes } from "./../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage/>}/>
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
