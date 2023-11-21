import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [todoName, setTodoName] = useState('')
    const [error, setError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!todoName.trim()) {
            setError('must be filled')
            return
        }

        const existingTodos = todos.findIndex(
            (todo) => todo.name === todoName.toLowerCase()
        )

        if (existingTodos !== -1) {
            setError('todos already exist')
            return
        }

        setTodos([...todos, { name: todoName.toLowerCase() }])
        setTodoName('')
        setError('')
    }

    return (
        <>
            <div className="flex border border-black rounded-md">
                <div className="flex justify-center flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => {
                            setTodoName(e.target.value)
                        }}
                        value={todoName}
                        className="border border-black"
                    />
                    <button
                        className="block py-2 px-4 hover:bg-ijo"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </div>
                <br />
                {error}

                <div>
                    {todos.map((todo, index) => (
                        <ul key={index} className="list-disc">
                            <li className="capitalize">{todo.name}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo
