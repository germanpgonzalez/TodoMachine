import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      placeholder="Cortar cebolla"
      onChange={(e) => setSearchValue(e.target.value)}
    ></input>
  );
};
