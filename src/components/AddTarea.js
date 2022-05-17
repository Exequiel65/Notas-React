import React from 'react'
import { useForm } from '../hooks/useForm'

export const AddTarea = ({handleAdd}) => {
  const [{description}, handleInputChange, reset] = useForm({
    description : ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (description.trim().length < 1) {
      return
    }

    const nuevaTarea = {
      id : new Date().getTime(),
      description,
      donde : false
    }

    handleAdd(nuevaTarea)

    reset()


  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name='description'
        placeholder='Aprender....'
        autoComplete='off'
        className='form-control'
        onChange={handleInputChange}
        value={description}
        />

        <button 
        type='submit'
        className='btn btn-primary w-100 mt-2'
        >
            Agregar
        </button>
    </form>
  )
}
