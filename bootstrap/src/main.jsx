
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom"
import ErrorPage from './ErrorPage.jsx'
import Layout from './Layout/Layout.jsx'
import User from './User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div><ErrorPage /></div>,
    children: [
      {
        path: "/home",
        element: <div>Homepage</div>,
        errorElement: <div><ErrorPage /></div>
      },
      {
        path: "/login",
        element: <div>Login</div>,
        errorElement: <div><ErrorPage /></div>
      },
      {
        path: "/about",
        element: <div>About</div>,
        errorElement: <div><ErrorPage /></div>
      },
      {
        path: "/user/:id",
        element: <User />,
        errorElement: <div><ErrorPage /></div>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
