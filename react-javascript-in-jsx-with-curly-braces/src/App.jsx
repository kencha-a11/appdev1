import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Avatar from './components/Avatar'

function App() {

  return (
    <>
      <Avatar />
      <TodoList />
      <TodoListDoubleCurlyBrace />
      <TodoListWithExtraFun />
    </>
  )
}

export default App


function TodoList() {
  const name = "Gregorio Y. Zara";
  return (
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



// we have object person here
const person = {
  name: 'Gregorio Y.Zara',
  // attributes can have objects to by curly braces
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

function TodoListWithExtraFun() {
  // bonus storing through variables
  const imageStyle = "avatar"

  return (
    // by just curly braces we can show the data from JavaScipt code 
    <div style={person.theme}>
      {/* here open the JavaScript windows */}
      <h1>{person.name}'s Todos</h1>

      <img
        className={imageStyle}
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />

      {/* also in this link is also have inherited the styling format of the div */}
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

    </div>
  )
}

//** More fun with javaScript objects and curly braces
// good thing about curly braces there is thousand combination of expressions and funcionality
// in which any types of complexity can be resolve  */