import React, { useState, useEffect } from 'react';

const TodoListHook = () => {
  const [todoList, setTodoList] = useState('');
  const [todoListItems, setTodoListItems] = useState([]);

  const addTodoList = (e) => {
    e.preventDefault();
    console.log(todoList);
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
  };

  return {
    todoList,
    setTodoList,
    todoListItems,
    setTodoListItems,
    addTodoList,
    removeTodoList,
  };
};

export default TodoListHook;
