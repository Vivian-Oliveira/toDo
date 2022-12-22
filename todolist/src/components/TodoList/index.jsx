import * as S from "./styles";

const TodoList = ({ todos, updateTodo }) => {
  return (
    <S.Container>
      {todos.map((todo, index) => (
        <S.Card key={index}>
          Item {index + 1}: {todo.task}
        </S.Card>
      ))}
    </S.Container>
  );
};

export default TodoList;
