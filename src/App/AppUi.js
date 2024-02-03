import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export function AppUI() {
  const { loading, error, searchedTodo, deletedTodo, completeTodo, openModal, setOpenModal } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodo.length === 0 && <EmptyTodos />}

        {searchedTodo.map((todos) => (
          <TodoItem
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
            onDelete={() => deletedTodo(todos.text)}
            onComplete={() => completeTodo(todos.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
      )}
    </>
  );
}
