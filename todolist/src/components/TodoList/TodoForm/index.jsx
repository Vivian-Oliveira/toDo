import React, { useState } from "react";
import * as S from "./styles";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addTodo({ complete: false, task: userInput });
    setUserInput("");
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        placeholder="New Task"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </S.Form>
  );
};

export default TodoForm;
