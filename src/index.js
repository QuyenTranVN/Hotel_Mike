/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RoomProvider from './context/RoomContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RoomProvider>,
)
