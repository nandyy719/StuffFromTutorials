import { useState } from "react"
import Todo from "./Todo"

export default function Todos({todos, onDelete, onToggle}) {

    

  return (
      <>

        {todos.map((todo) => 
            (<Todo key = {todo.id} todo = {todo} onDelete = {(id) => onDelete(id)} onToggle = {(id) => onToggle(id)}/>)
        )}

      </>
  )
}
