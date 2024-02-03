import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './TodoItem.css';


export const TodoItem = ({text,completed, onDelete, onComplete}) => {
  return (
    <li className="TodoItem">
      <FaCheck className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      <ImCross className="Icon Icon-delete" onClick={onDelete}/>
    </li>
  )
}
