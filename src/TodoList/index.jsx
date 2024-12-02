import './TodoList.css';

export const TodoList = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}
