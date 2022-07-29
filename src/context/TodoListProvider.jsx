import React, { useState, createContext } from 'react';

export const TodoListContext = createContext();

const TodoListProvider = (props) => {
  const [todoList, setTodoList] = useState('');
  const [todoListItems, setTodoListItems] = useState([]);
  const [showEdit, setShowEdit] = useState(99);
  const [update, setUpdate] = useState('');
  const addTodoList = (e) => {
    e.preventDefault();
    if (todoList.trim() === undefined || todoList.trim() === '') {
      setTodoList('');
      return alert('No puedes agregar una lista vacia');
    }
    setTodoListItems([...todoListItems, todoList]);
    setTodoList('');
  };

  const removeTodoList = (index) => {
    const newTodoListItems = todoListItems.filter((item, i) => i !== index);
    setTodoListItems(newTodoListItems);
    setShowEdit(false);
  };
  const probando = (index, item) => {
    setShowEdit(index);
    setUpdate(item);
  };

  const editTodoList = (index) => {
    if (update === undefined || update === '') {
      removeTodoList(index);
      return alert('Lista eliminado por no tener nombre');
    }
    const newTodoListItems = todoListItems.map((item, i) => {
      if (i === index) {
        return update;
      }
      return item;
    });
    setTodoListItems(newTodoListItems);
    setShowEdit(false);
    setUpdate('');
  };
  return (
    <TodoListContext.Provider
      value={{
        setUpdate,
        showEdit,
        setShowEdit,
        todoList,
        setTodoList,
        setTodoListItems,
        todoListItems,
        addTodoList,
        removeTodoList,
        editTodoList,
        update,
        probando,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
