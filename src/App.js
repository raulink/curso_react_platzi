/* import logo from './platzi.webp'; */
import './App.css';
import {TodoCounter} from './components/TodoCounter'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import {TodoItem} from './components/TodoItem'
import {TodoButton} from './components/TodoButton'
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

      <TodoButton/>
    </div>
  );
}


export default App;

