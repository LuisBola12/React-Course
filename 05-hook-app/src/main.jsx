import React from "react";
import ReactDOM from "react-dom/client";
// import  {HooksApp}  from './HooksApp'
import "./08-useReducer/intro-reducer";
import "./index.css";
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-Memos/Memorize';
// import { MemoHook } from './06-Memos/MemoHook';
// import { CallBackHook } from './06-Memos/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
