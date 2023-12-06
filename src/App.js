/** @format */
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
])
const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
