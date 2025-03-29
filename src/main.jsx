import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes,Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Detail from './Detail.jsx'

let router=createBrowserRouter([
  {
    path: "/details",
    element:<Detail/>
  },
  {
    path: "/",
    element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
