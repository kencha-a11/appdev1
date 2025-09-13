import './App.css'

function MyButton() {
  return (
    <button className='red-btn'>I'm a button</button>
  );
}


function App() {

  return (
    <>
    <h1 style={{color: 'blue'}}>App Component</h1>
      <MyButton />
    </>
  )
}

export default App
