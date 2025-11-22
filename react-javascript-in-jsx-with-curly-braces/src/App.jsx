import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Avatar from './components/Avatar'

function App() {

  return (
    <>
      <Avatar />
      <TodoList />
      <TodoListDoubleCurlyBrace />
    </>
  )
}

export default App


function TodoList() {
  const name = "Gregorio Y. Zara";
  return(
    <h1>{name}'s To Do List</h1>
    // this is how single curly braces can do
  )
}

//** Using curly braces: A window into the JavaScript world
//  by just curly braces there is a world to discover 
// technically you can insert expression and arithmetics, calculation or funciton calls
// */

function TodoListDoubleCurlyBrace() {
  return (
    <ul
    // styles where derive and known for dash to connect words while react Pascal casing format
    style={{ 
      backgroundColor: 'black', // inside object we can declare multiple attributes value
      color: 'pink', // in which follows the pascal casing and CSS rule in JSX component
     }}>
      
    </ul>
  )
}

//** Using "double curlies": CSS and other objects in JSX
// technically it useable in CSS styling rules turning the styles into objects
// in which this is the main reason of double curlybraces */

