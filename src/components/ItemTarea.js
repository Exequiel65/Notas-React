import React from 'react'

export const ItemTarea = (
    {
        tarea:{id, description, done},
        index, 
        handleDelete,
        handleUpdate,
    }
    ) => {

  return (
    <li key={id} className="d-flex justify-content-between align-item-center">
        <p onClick={()=> handleUpdate(id)} className={done && 'text-decoration-line-through'}>
            {index + 1}. {description}
        </p>
        <button className='btn btn-sm btn-danger mb-l' onClick={()=> handleDelete(id)}>
            <i className='fas fa-trash-alt'> </i>
        </button>
    </li>
  )
}
