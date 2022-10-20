import {useGetTodosQuery} from '@src/store/todo/todoApi'
import React from 'react'

function TodosView() {
  const {isLoading, isError, data: todos} = useGetTodosQuery()

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <div>
      {isError && <h3>{isError}</h3>}
      {todos && todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}
export default TodosView
