import "./index.css"
import TodoList from "./components/to-do-list.jsx"
import ContextApiProvider from "./context/todo-context.jsx"

export default function App() {

    return (
        <ContextApiProvider>
            <h2>React Basic ToDo List From Scratch</h2>
            <TodoList />
        </ContextApiProvider>
    )
}
