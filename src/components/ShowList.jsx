import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListProvider';

const ShowList = () => {
  const {
    removeTodoList,
    showEdit,
    setUpdate,
    setShowEdit,
    editTodoList,
    todoListItems,
    activeTodoListEdit,
    desactiveTodoListEdit,
    update,
    probando,
  } = useContext(TodoListContext);
  return (
    <>
      {todoListItems.map((item, index) => (
        <div className="container-List-text" key={index}>
          <>
            <div className="container-input-list">
              {showEdit !== index ? (
                <>
                  <div>
                    <p>{item}</p>
                  </div>
                  <button onClick={() => probando(index, item)}>Editar</button>
                  <button onClick={() => removeTodoList(index)}>
                    Eliminar
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={update}
                    placeholder={item}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                  <button onClick={() => editTodoList(index)}>Cambiar</button>
                  <button onClick={() => setShowEdit('')}>Cancelar</button>
                </>
              )}
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default ShowList;
