import PageLayout from "../Layouts/PageLayout"
import Gallery from "../components/Gallery"
// Define component outside page layout

// Using the component
function App() {
  return (
    <>
      <PageLayout>
        <Article />
        <Gallery />
      </PageLayout>
    </>
  )
}

export default App

// Defining reusable component inside App.jsx file
function Article() {
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  )
}


/* ---------------- Defining Component ----------------
| Defining component must start with capital letter 
| For two word component use pascal casing
| Steps:
| 1.) Exporting component with defaults
| 2.) Define function syntaxing
| 3.) Adding markup in component return keyword
|
| Parenthesis in return () used to return parent object
| Reason to avoid the JS ASCI 
*/


/* ----------------- Using Component ------------------
| Browser see element by lowercasing ex. <section>
| but with <Section> react know when to use component
| Defining component inside the component is not practices
| Nesting a component is considered best practices & standards
*/