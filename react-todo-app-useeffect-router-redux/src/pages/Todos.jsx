import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/addTodoForm"
import TodoList from "../components/TodoList"

export default function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div>
            <h1>Todos</h1>
            <AddTodoForm />
            <TodoList todos={todos} />
        </div>
    )
}
