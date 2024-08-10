/* import logo from './platzi.webp'; */
import './App.css';
import { TodoCounter } from './components/TodoCounter'
import { TodoList } from './components/TodoList'
import { TodoSearch } from './components/TodoSearch'
import { TodoItem } from './components/TodoItem'
import { TodoButton } from './components/TodoButton'

/* Renderizar arrays */

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso ", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Otro item 4", completed: false },
  { text: "Otro item 5", completed: false },
]

function App() {
  return (
    <> {/* es lo mismo de div className="App" */}

      <TodoCounter completed={5} total={10} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}

      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;

