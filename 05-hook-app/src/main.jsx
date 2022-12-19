import React from 'react'
import ReactDOM from 'react-dom/client'
// import  {HooksApp}  from './HooksApp'
import './index.css'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks />
  // </React.StrictMode>
)
