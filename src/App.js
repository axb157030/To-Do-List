import { useEffect, useState } from "react"
import Todobar from './Taskbar.js';
import { TodoList } from "./TodoList"
import { Container, Divider, Header, Checkbox } from 'semantic-ui-react'

import './App.css';

function App() {
  const [nightMode, setNightMode] = useState(true);
  const [darkTheme, setDarkTheme] = useState('light')
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function switchDayLight() {
    setNightMode(!nightMode)
    console.log(nightMode)
    if(nightMode) {
      setDarkTheme('dark');
    }
    else {
      setDarkTheme('light');
    }
    
  }

  useEffect(() => {
    document.body.className = darkTheme;
  }, [darkTheme]);


  return (
    <>
        <Container style={{ margin: 20 }} className={darkTheme}>
          <Checkbox toggle className="far-right" onChange={() => switchDayLight()} />
          <Header className={darkTheme} as='h1' textAlign="center">To Do List</Header>
          <Todobar className={darkTheme} onSubmit={addTodo} />
          <Divider horizontal className={darkTheme}>Tasks</Divider>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} darkTheme={darkTheme}/>
        </Container>
    </>


  );
}

export default App;
