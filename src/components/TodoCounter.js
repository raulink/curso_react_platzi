/* const estilos ={
  backgroundColor: "red",
  fontSize:"45px",  
  textAlign :'center',
  margin:0,
  padding:'48px',
}
 */

import './TodoCounter.css'  // importar estilos css, se inserta al head de la aplicacion
function TodoCounter({total,completed}) {
    return (
      <h1 class="TodoCounter">{ /* style={estilos} */}
        Has completado {completed} de {total} todos
      </h1>
    )
  }
  
export {TodoCounter};
  