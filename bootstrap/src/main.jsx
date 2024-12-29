import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello W</div>,
    errorElement: <div><ErrorPage /></div>
  },
  {
    path: "/home",
    element: <div>Home</div>,
    errorElement: <div><ErrorPage /></div>
  },
  {
    path: "/login",
    element: <div>Login</div>,
    errorElement: <div><ErrorPage /></div>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
