import React, {useState} from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

export default () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: 'Viec 1'
    },
    {
      id:2,
      title: 'Viec 2'
    },
    {
      id:3,
      title: 'Viec 3'
    },
  ]);
  const addTodo = todo => {
    setTodos([...todos, todo])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo=> todo.id !== id ))
  }
  return (
    <div className="todo_main">
      <TodoForm addTodo={addTodo}/>
      <ul className="todo_main--list">
        <li>
          {
            todos.map(todo => (
              <TodoList todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
            ))
          }
        </li>
      </ul>
    </div>
  )
}
