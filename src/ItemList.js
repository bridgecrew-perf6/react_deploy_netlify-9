import { FaTrashAlt } from "react-icons/fa";
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            value={item.checked}
            onChange={() => handleCheck(item.id)}
          ></input>
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
