import React, { useState } from "react";
import * as S from "./StylesGlobal";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    { complete: false, task: "task1" },
    { complete: false, task: "task2" },
    { complete: false, task: "task3" },
  ]);

  return (
    <S.Container>
      <TodoForm
        addTodo={(todo) => {
          if (todo.task.trim().length > 0) {
            setTodos([...todos, todo]);
          }
        }}
      />
      <TodoList todos={todos} />
    </S.Container>
  );
};

export default App;
