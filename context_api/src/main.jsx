import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let mainob=createContext()
// let contact=123456
let userdata={name:"king",age:23,contact:1234}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <mainob.Provider value={userdata}>
    <App />
    </mainob.Provider>
  </StrictMode>,
)
export {mainob}