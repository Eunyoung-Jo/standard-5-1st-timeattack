import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";


export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, contents) => {
    setTodos([
      ...todos,
      {id: Date.now(), title, contents, isDone: false},
    ]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          return{
            ...todo,
            isDone: !todo.isDone,
          }
        }
        return todo;
      })
    );
  }

return (
    <>
      <h1>MyToDoList</h1>
      <TodoForm addTodo={addTodo}/>
      <div className="todo-container">
        <TodoList
        todos={todos.filter(todo => !todo.isDone)}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
        title="Working!!!"
        buttonText="완료"
        />
        <TodoList
        todos={todos.filter(todo => todo.isDone)}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
        title="Done!!!"
        buttonText="미완료"
        />
      </div>
      </>
  );
}
