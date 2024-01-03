import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import New from './New.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <New fname="Pooja" lname="Rani" />
  </React.StrictMode>,
)
