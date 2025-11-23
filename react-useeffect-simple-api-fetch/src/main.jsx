import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UsersFetch from './UsersFetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersFetch />
  </StrictMode>,
)
