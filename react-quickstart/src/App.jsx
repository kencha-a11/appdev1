import './App.css'

function MyButton() {
  return (
    <button className='red-btn'>I'm a button</button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

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



function App() {

  return (
    <>
      <h1 style={{ color: 'blue' }}>App Component</h1>
      <MyButton />
      <Profile />
    </>
  )
}

export default App
