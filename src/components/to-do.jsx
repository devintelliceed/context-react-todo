import React, { Fragment, useContext } from "react"
import { ContextApi } from "../context/todo-context.jsx"

export default function Todo() {
    const { todos, todoDeleteHandler, todoStatusChangeHandler } = useContext(
        ContextApi
    )
    return <Fragment>
        {todos.map(todo => {
            return (
                <div key={todo.id} className="list">
                    <button
                        onClick={() => todoStatusChangeHandler(todo.id)}
                        title="Change Status"
                    >
                        {todo.status ? "Cancle" : "Done"}
                    </button>
                    <span>
                        {todo.status ? <del>{todo.task}</del> : todo.task}
                    </span>
                    <button
                        onClick={() => todoDeleteHandler(todo.id)}
                        title="Delete"
                    >
                        Delete
                    </button>
                </div>
            )
        })}
    </Fragment>;
}
