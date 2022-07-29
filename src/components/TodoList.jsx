import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListProvider';
import ShowList from './ShowList';
const TodoList = () => {
  const { addTodoList, removeTodoList, setTodoList, todoList, todoListItems } =
    useContext(TodoListContext);

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={(e) => addTodoList(e)} className="container-input">
        <input
          type="text"
          value={todoList}
          onChange={(e) => setTodoList(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <ShowList />
    </>
  );
};

export default TodoList;
