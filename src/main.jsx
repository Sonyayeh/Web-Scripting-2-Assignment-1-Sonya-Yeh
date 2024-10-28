// here, I am importing all of the files into here
// I am importing App.jsx and index.css from the other pages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Items from './data/Items.json'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
