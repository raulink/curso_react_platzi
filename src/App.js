/* import logo from './platzi.webp'; */
import './App.css';
import {TodoCounter} from './components/TodoCounter'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {TodoItem} from './components/TodoItem'
function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      {/* <CreateTodoButton /> */}
    </div>
  );
}




export default App;

