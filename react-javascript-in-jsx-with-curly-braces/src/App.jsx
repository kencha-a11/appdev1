import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Avatar from './components/Avatar'

function App() {

  return (
    <>
      <Avatar />
      <TodoList />
    </>
  )
}

export default App


function TodoList() {
  const name = "Gregorio Y. Zara";
  return(
    <h1>{name}'s To Do List</h1>
  )
}

//** Using curly braces: A window into the JavaScript world
//  by just curly braces there is a world to discover 
// technically you can insert expression and arithmetics, calculation or funciton calls
// */