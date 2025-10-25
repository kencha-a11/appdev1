import Gallery from "../src/components/Gallery"
import TodoList from "./components/TodoList"
import Profile from "./components/Profile"
import PackingList from "./components/PackagingList"
import List from "./components/List"
import TeaSet from "./components/TeaSet"
import RootComponent from "./components/tree/RootComponent"
import { rootGreet } from "./module/RootModule"


function App() {
  const greet = rootGreet()

  return (
    <>
      {/* <Gallery /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <PackingList /> */}
      {/* <List /> */}
      {/* <TeaSet /> */}
      <RootComponent />
      <p>{greet}</p>
    </>
  )
}

export default App
