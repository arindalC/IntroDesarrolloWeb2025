import { useEffect, useState } from "react";

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li className="list-group-item d-flex align-items-center gap-2"> 
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        // Cuando se le da click al elemento, se llama a la función cambiaValor pasada como prop
        // Lo correcto sería usar onChange en lugar de onClick para inputs de tipo checkbox
        onChange={() => cambiaValor()}
      />
      <span>{texto}</span>
    </li>
  );
}

// Componente NewItemsForm para agregar nuevos ítems a la lista
function NewItemsForm({newItem}){
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    newItem(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mt-3">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit" className = "btn btn-primary mt-2">Agregar tarea</button>
    </form>
  );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
  // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
  // se vuelva a renderizar el componente
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
  ]);

  // Estado para la última hora de cambios
  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

  // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  // Función para cambiar el estado de una tarea por su ID
  // Lo correcto sería usar un map en lugar de find y filter para evitar mutaciones directas
  const cambiaTareaPorId = (id) => {
    setTareas((arregloPrevio) => 
      arregloPrevio.map((tarea) => 
        tarea.id === id 
          ? {...tarea, completado: !tarea.completado}
          : tarea
      )
    );
  };

  // Función para agregar una nueva tarea a la lista
  // creamos un nuevo objeto tarea con un id único
  const agregarNuevaTarea = (texto) => {
    setTareas((prev) => [
      ...prev, // mantenemos las tareas anteriores
      {
        id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
        completado: false, // la tarea comienza como incomplete
        texto, // usamos el texto agregado por NewItemsForm
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Todo list</h1>
        <NewItemsForm newItem={agregarNuevaTarea} />
        <ul className="list-group">
          {tareas.map((tarea) => (
            <ListItem
              key={tarea.id}
              id={tarea.id}
              completado={tarea.completado}
              texto={tarea.texto}
              cambiaValor={() => cambiaTareaPorId(tarea.id)}
            />
          ))}
        </ul>
        <p className="mt-3">
          Última hora de cambios: {ultimaHoraDeCambios}
        </p>
      </div>
    </>
  );
};
export default TodoList;
