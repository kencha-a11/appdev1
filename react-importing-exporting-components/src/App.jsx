// Imported component gallery
import Gallery from "./components/Gallery" // <--- Default export component
import { Profile } from "./components/Gallery" // <--- Name export component notice { name export here }


// Root component file will be App.jsx 
function App() {

  return (
    <>
      <Gallery /> {/* <--- Default export */}
      <Profile /> {/* <--- Name export */}
    </>
  )
}

export default App


/**
 * Root Component File
 * Purpose splitting the file scan vast line of code
 * root file can be anything aside in App.jsx
 * in order for export file and import in higher order
 * maintainability
 */

/**
 * Exporting and Importing component
 * Goal make component modular and reusable 
 * Broken down each components
 * Steps:
 * 1.) Make new JS file to put the components in 
 * 2.) Export your function component from that file (Named Export, Default export)
 * 3.) Import it in the file where you'll use the component (Importing Name & Default export)
 * 
 * Take note: with or without file extension is working according the ES module
 */

/**
 * Default and Name exports
 * A file can have no more than one default export
 * but it can have as many named exports as you like
 */

/**
 * Exporting and Importing multiple components from same file
 * Take note: only the syntax is change when defining the exports
 * and importing syntax with {} curly braces
 */