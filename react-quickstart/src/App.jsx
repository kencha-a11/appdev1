import './App.css'
import { useState } from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyButton() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <button className='red-btn' onClick={handleClick}>Click Me {count}</button>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function Navigation() {
  return <h1>Navigation Component</h1>;
}

function Footer() {
  return <h1>Footer Component</h1>;
}


let content;

if (true) {
  content = <Navigation />;
} else {
  content = <Footer />;
}

function App() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  )
  return (
    <>
      <h1 style={{ color: 'blue' }}>App Component</h1>
      <MyButton />
      <Profile />
      {content}
      <ul>{listItems}</ul>
    </>
  )
}

export default App
