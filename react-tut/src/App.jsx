import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Todos from './components/Todos.jsx';
import AddTodo from './components/AddTodo.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';

function App() {
  const [todos, setTodos] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    const getTodos = async () => {
      const serverTodos = await fetchTodos()
      setTodos(serverTodos)

    }

    getTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()
    return data;
  }

const deleteTodo = async (id) => {
  await fetch(`http://localhost:5000/todos/${id}`, {
    method : 'DELETE'
  })
  setTodos(todos.filter((todo) => todo.id !==  id))
}

const fetchTodo = async (id) => {
  const res = await fetch(`http://localhost:5000/todos/${id}`)
  const data = await res.json()
  return data;
}

const toggleReminder = async (id) => {
  let updatedTodo = await fetchTodo(id)
  updatedTodo = {...updatedTodo, reminder: !updatedTodo.reminder}

  const res = await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(updatedTodo)
  })

  const data = await res.json()
   
  setTodos(todos.map((todo) => todo.id === id ? {...todo, reminder: data.reminder} : todo ))
}

const addTodo = async (todo) => {
   const res = await fetch('http://localhost:5000/todos', {
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(todo)
  })
  const data = await res.json()
  setTodos([...todos, data])
}

const toggleForm = () => {setShowAddForm(!showAddForm)}


  return (
    <div className="container">

      <Header onToggle = {() => toggleForm()} showForm = {showAddForm}/>
      {showAddForm && <AddTodo onAdd = {(todo) => addTodo(todo)} />}

          { todos.length > 0 ? 
            <Todos todos = {todos} onDelete = {(id) => deleteTodo(id)}  onToggle = {(id) => toggleReminder(id)}/> 
              : <h3>No Tasks</h3>
          }
      <Footer />

    </div>

  );
}

export default App
