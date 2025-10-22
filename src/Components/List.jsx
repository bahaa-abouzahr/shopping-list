import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function List({object, index, handleDeleteItem, handleToggle, handleMove, active}) {
  const {item, bought} = object;

  if(active === 2 && bought === true ) return;
  if(active === 3 && bought === false) return;

  return (
    <div className={`grid grid-cols-3 items-center w-[75%] border-b border-gray-300 my-1 px-1 text-sm`}>
      <span 
        onClick={() => handleToggle(index)}
        className={`${bought ? "text-green-300 line-through" : "text-red-500"} cursor-pointer`}
      >
        {item}
      </span>

      <div className="flex gap-8 justify-center items-center">
        <button onClick={() => handleMove(index, 'up')}><FaArrowUp /></button>
        <button onClick={() => handleMove(index, 'down')}><FaArrowDown /></button>
      </div>

      <button onClick={() => handleDeleteItem(index)} className="flex justify-end items-center text-xs text-red-500 ">❌</button>

    </div>
  )
}

export default List
