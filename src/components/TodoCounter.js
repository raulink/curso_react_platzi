const estilos ={
  backgroundColor: "red"
}

function TodoCounter({total,completed}) {
    return (
      <h1 style={estilos}>
        Has completado {completed} de {total} todos
      </h1>
    )
  }
  
export {TodoCounter};
  