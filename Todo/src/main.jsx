import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Features from '../Pages/Features.jsx'
import Login from './pages/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/login',
    element: <Login />,
    
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)