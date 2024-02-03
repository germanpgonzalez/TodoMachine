import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

export const TodoCounter = () => {
      const { 
        completedTodos,
        totalTodos,
      }  = useContext(TodoContext);

       if( completedTodos === totalTodos){
         return <h1 className="TodoCounter"> <span>Felicitaciones</span>, has completado todos los TODO's 😀 </h1>
       } else {
         return  <h1 className="TodoCounter"> Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's</h1>
       }
}
