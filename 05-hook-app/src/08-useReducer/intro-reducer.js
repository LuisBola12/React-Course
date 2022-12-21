//BASES PARA CREAR UN REDUCER

//ESTADO INICIAL
const initialState = [
  {
    id: 1,
    tarea: "Recolectar la piedra del alma",
    done: false,
  },
];
//RECUCER< METODO QUE SE ENCARGUE DE REGRESAR UN ESTADO DESPUES
//DE UNA ACCCION
const todoReducer = (state = initialState, action = {}) => {
    //SI LA ACCION ES UNA DE LAS DEFINIDAS, EN ESTE CASO AL SER
    //UN ADD COPIO EL ESTADO EXISTENTE Y AGREGO EL PAYLOAD
    //UN TODO SIEMPRE DEVUELVE UN ESTADO
    if(action.type === '[TODO] add todo'){
        return [...state,action.payload];
    }
  return state;
};
//SE INICIALIZA EL ESTADO
let tareas = todoReducer();
//SE DECLARA UNA NUEVA TAREA QUE SE DESEA AGREAGAR AL ESTADO
const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
};
//SE CREA UNA ACCTION QUE EL ESTADO DEBE DE INTERPRETAR
const addTodoAction = {
    type: '[TODO] add todo',
    payload:newTodo,
}
//SE AGREGA LA NUEVA TAREA A LA LISTA DE TAREAS
tareas = todoReducer(tareas,addTodoAction);
console.log(tareas);
