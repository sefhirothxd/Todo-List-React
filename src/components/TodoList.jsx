import React from 'react';
import TodoListHook from '../hooks/TodoListHook';
const TodoList = () => {
  const costumTodoList = TodoListHook();

  return (
    <>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => costumTodoList.addTodoList(e)}
        className="container-input"
      >
        <input
          type="text"
          value={costumTodoList.todoList}
          onChange={(e) => costumTodoList.setTodoList(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <div>
        {costumTodoList.todoListItems.map((item, index) => (
          <div className="container-List-text" key={index}>
            <p className="">{item}</p>
            <button onClick={() => costumTodoList.removeTodoList(index)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
