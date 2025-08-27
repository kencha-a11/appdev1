import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>About Me Page</h1>
        <p>
          <strong>Name:</strong> Fernandez, Aljon Ken Y.
          <br />
          <strong>Course/Year:</strong> BS Information Technology 3rd Year
          <br />
          <strong>Fun Fact:</strong> I can work and focus anywhere.
        </p>

        <hr />

        <h2>Why I want to learn React</h2>
        <p>
          I want to learn React because it is one of the most powerful and widely used JavaScript
          libraries for building modern user interfaces. With its <strong>component-based </strong>
           structure, <strong>JSX syntax</strong>, and support for <strong>hooks</strong> like
          <code> useState</code> and <code>useEffect</code>, React allows developers to create
          <strong> dynamic</strong>, <strong>interactive</strong>, and <strong>scalable</strong> applications.
        </p>
        <p>
          I’m also interested in how React uses the <strong>Virtual DOM</strong> for efficient rendering,
          supports <strong>client-side rendering</strong>, <strong>server-side rendering</strong>, and even
          <strong>static site generation</strong>. These features make it easier to build
          <strong> single-page applications</strong> that are fast and responsive.
        </p>
        <p>
          Learning React will help me improve in <strong>data management</strong>, handling
          <strong> props</strong> and <strong>state</strong>, and writing clean, reusable code using
          modern <strong>ES6+</strong> features like <code>let/const</code>, <code>arrow functions</code>,
          <code>spread operators</code>, <code>import/export modules</code>, and <strong>classes</strong>.
        </p>
        <p>
          I also want to strengthen my digital footprint to attract professionals and experts in
          programming and development. I want to discover effective system structures, identify areas
          where I need improvement, and avoid mistakes by following industry best practices for systems.
        </p>
      </div>

    </>
  )
}

export default App
