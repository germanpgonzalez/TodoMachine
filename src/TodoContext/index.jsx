import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todos) => todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter((todos) => {
    const todoText = todos.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  function deletedTodo(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todos) => todos.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todos) => todos.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text:text,
      completed: false,
    });
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        deletedTodo,
        completeTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
