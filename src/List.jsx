import { useState } from "react";

function List({object, index, handleDeleteItem, handleToggle, active}) {
  // const [active, setActive] = useState(false);
  const {item, bought} = object;

  if(active === 2 && bought === true ) return;
  if(active === 3 && bought === false) return;

  return (
    <div 
      key={index} 
      className={`grid grid-cols-[1fr_1fr_1fr] items-center w-[90%] border-b border-gray-300 my-1 px-1 text-sm`}
    >

      <p className={`${bought ? "line-through" : ""}`}>{item}</p>

      <button 
        onClick={()=> handleToggle(index)}
        className={`${bought ? "text-green-300" : "text-red-500"} `}
      >
        {bought ? "purchased" : "not yet"}
      </button>
      <p onClick={() => handleDeleteItem(index)} className="text-xs text-right">❌</p>
    </div>
  )
}

export default List
