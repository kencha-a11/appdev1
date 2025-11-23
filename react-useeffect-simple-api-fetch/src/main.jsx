import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UsersFetch from './UsersFetch.jsx'
import PostsFetchAsync from './PostsFetchAsync.jsx'
import TodoListAxios from './TodosFetchAxios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UsersFetch /> */}
    {/* <PostsFetchAsync /> */}
    <TodoListAxios />
  </StrictMode>,
)
