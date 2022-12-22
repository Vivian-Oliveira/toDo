import React, { useState } from "react";
import * as S from "./StylesGlobal";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoList/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    { complete: false, task: "Read about MongoDb" },
    { complete: false, task: "Create a React ToDo App" },
    { complete: false, task: "Find my key" },
  ]);
  return (
    <S.Container>
      <TodoForm
        addTodo={(todo) => {
          if (todo.task.trim().lengh > 0) {
            setTodos([...todos, todo]);
          }
          console.log(todo);
        }}
      />
      <TodoList todos={todos} />
    </S.Container>
  );
};

export default App;
