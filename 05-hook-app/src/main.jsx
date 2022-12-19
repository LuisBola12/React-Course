import React from 'react'
import ReactDOM from 'react-dom/client'
// import  {HooksApp}  from './HooksApp'
import './index.css'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleFormWithCustomHook />
  // </React.StrictMode>
)
