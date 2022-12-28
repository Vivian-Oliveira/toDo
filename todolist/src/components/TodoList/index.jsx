import * as S from "./styles";

const TodoList = ({ todos, updateTodos }) => {
  const markComplete = (id) => {
    const updatedList = todos.map((item, index) => {
      if (id !== index) return item;
      return { ...item, complete: !item.complete };
    });
    updateTodos(updatedList);
  };

  return (
    <S.Container>
      {todos.map((todo, index) => (
        <S.Card key={index} onClick={() => markComplete(index)}>
          Item {index + 1}: {todo.task}
        </S.Card>
      ))}
    </S.Container>
  );
};

export default TodoList;
