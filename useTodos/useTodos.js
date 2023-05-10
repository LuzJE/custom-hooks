import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

// Esta función nos permite que los datos sean persistentesm, es decir, que no se pierdan los datos del localStorage al momento de recargar el navegador 
const init = () => {
    // Que intente parsear lo que se encuentre en el localStorage
    // Si es nulo regreso un arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || [] ;
}

export const useTodos = () => {

    // El todoReducer no lo ejecutamos, sólo pasamos la referencia
    // init es la función que inicializa nuestro reducer
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter( todo => !todo.done ).length;

    // El useEffect se dispara una vez de que el componente se monta
    useEffect(() => {
        // Guardamos en el LocalStorage
        // Recordatorio: en el localStorage se guardan strings no objetos
        localStorage.setItem('todos', JSON.stringify( todos ) );    
    }, [todos]);
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo =( id ) => {

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo =( id ) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });

    }

    return {
        todos, 
        todosCount,
        pendingTodosCount,
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    }
}