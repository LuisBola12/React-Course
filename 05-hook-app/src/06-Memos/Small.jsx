import React from "react";

export const Small = React.memo(({ counter }) => {
  console.log("me volvi a dibujar");
  return <small>{counter}</small>;
});
