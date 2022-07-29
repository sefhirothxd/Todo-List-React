import './App.css';
import TodoList from './components/TodoList';
import TodoListProvider from './context/TodoListProvider';

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
}

export default App;
