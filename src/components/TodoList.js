/* Todo lo que esta en la propiedad interna como childrens */

import './TodoList.css'

function TodoList({children}) {
    return (
      <ul class="TodoList">
        {children}
      </ul>
    )
  }
export {TodoList};
  