
import { useEffect, useReducer } from 'react';
import './App.css';
import { AddTarea } from './components/AddTarea';
import { ListTareas } from './components/ListTareas';
import { tareasReducer } from './reducers/tareasReducer';


function App() {
  const init = ()=>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
  }
  const [tareas, dispatch] = useReducer(tareasReducer, [], init)

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
    
  }, [tareas]);

  const handleAdd = (newTarea) =>{
    const agregarTarea = {
      type : "agregar",
      payload : newTarea
    }

    dispatch(agregarTarea)
  }

  const handleDelete = (id)=>{
    const borrarTarea = {
      type : "borrar",
      payload : id
    }
    dispatch(borrarTarea)
  }

  const handleUpdate = (id)=>{
    const actualizarTarea = {
      type : "actualizar",
      payload : id
    }
    dispatch(actualizarTarea)
  }
  return (
    <div className='container' >
      <h1>Tareas</h1>
      <hr/>
      <h4>Total de tareas: </h4>
      <hr/>
      <div className='row'>
        <div className='col-7'>
          <ListTareas 
            tareas={tareas}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>

        <div className='col-5'>
          <AddTarea 
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
