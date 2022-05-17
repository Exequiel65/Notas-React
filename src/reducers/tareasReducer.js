export const tareasReducer = (state = [], action) => {
    switch (action.type) {
        case "agregar":
            return[...state, action.payload]
            
        case "borrar":
            return state.filter(tarea => tarea.id !== action.payload)
        
        case "actualizar":
            return state.map(tarea =>{
                return tarea.id === action.payload ? 
                {...tarea, done: !tarea.done} : tarea
            })
        default:
            return state
    }
}
