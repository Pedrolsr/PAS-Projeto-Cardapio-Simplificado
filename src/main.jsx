import React from 'react'
import ReactDOM from 'react-dom/client'
import { TemaProvider } from './context/TemaContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>,
)
