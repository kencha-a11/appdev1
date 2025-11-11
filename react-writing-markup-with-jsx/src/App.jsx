export default function App() {

  return (
    <>
      <TodoList />
    </>
  )
}



export function TodoList() {
  return (
    <> {/* <--- must have one parent element to work --- 1.) Return sinble root element (<></> or <div> and others) */}
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo" // <--- HTML uses class reserve keyword JSX uses the className --- 3.) camelCase all most of the things CSS, HTML, JS etc
      /> {/* <--- img html element is a self closing tag must be closed JSX strict rule --- 2.) Close all the tags*/}

      <ul>
        <li>Invent new traffic lights</li> {/* <--- all html element must be properly closed in JSX*/}
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  )
}



/**
 * Writing Markup with JSX
 * JSX is syntax extension for javascript that 
 * Tets you write html like markup inside javascript
 * Lets you render logic inside the html elements
 * They live in the same file
 * 
 * Purpose is to stay in sync with each other on every changes
 * React component use JSX to represent markup
 * 
 * Important note
 * JSX is a syntax extension for javascript (strict rules)
 * React is a Javascript library
 */


/**
 * Conveting HTML to JSX
 * JSX is strictful implementation of rules rather than HTML
 * 
 * Helpful Note:
 * React on-screen error messages will help solve problem
 */

/**
 * The Rules of JSX
 * 1.) Return a single root element (parent)
 * 2.) Close all the HTML tags
 * 3.) camelCase all most of the things
 * 
 * JSX tags must be wrap
 * Reason:
 * Its just Javascript behind transformed into plain javascript object
 * Returning two object is prohibited unless wrap into array (fragment or element)
 */