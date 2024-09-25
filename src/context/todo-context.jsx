import { useState, createContext} from "react";

const defaultTodos = [
    { task: "Default task, can't be deleted", id: 1, status: 0 }
];

export const ContextApi = createContext({
    todos: [],
    todoCreateHandler: () => {},
    todoDeleteHandler: () => {},
    todoStatusChangeHandler: () => {}
});

const ContextApiProvider = ({ children }) => {
    const [todos, setTodos] = useState(defaultTodos);

    const todoCreateHandler = todoNew => {
        setTodos([{ ...todoNew }, ...todos])
    }

    const todoDeleteHandler = id => {
        setTodos(currentTodos => {
            let todoRemains = currentTodos.filter(todo => {
                return todo.id !== id || todo.id === 1
            })
            return todoRemains
        })
    };

    const todoStatusChangeHandler = id => {
        setTodos(currentTodos => {
            let todoRemains = currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, status: !todo.status }
                }
                return { ...todo }
            })
            return todoRemains
        })
    };
    const context = {
        todos: todos,
        todoCreateHandler,
        todoDeleteHandler,
        todoStatusChangeHandler,
    };
    return <ContextApi.Provider value={context}>{children}</ContextApi.Provider>;
};

export default ContextApiProvider;
