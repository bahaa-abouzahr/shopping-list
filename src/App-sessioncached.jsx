import { useEffect, useState } from "react";
import List from "./list";

function App() {
  const [shoppingList, setShoppingList] = useState(() => {
    const savedList = sessionStorage.getItem("shoppingList");
    return savedList ? JSON.parse(savedList) : []
  });
 
  const [active, setActive] = useState(1);
  const [input, setInput] = useState('');

  const bought = shoppingList?.reduce((acc,val) => val.bought === true ? acc + 1 : acc, 0)

  function handleAdd(e){
    e.preventDefault();
    if(!input) return;
    
    setShoppingList([...shoppingList, {item: input, bought: false}]);
    setInput('');
  }

  function handleDeleteItem(ind) {
    setShoppingList(shoppingList.filter((_, index) => index !== ind));
  }

  function handleDeletePurchased() {
    setShoppingList(shoppingList.filter(object => object.bought === false))
  }

  function handleToggle(ind) {
    setShoppingList(
      shoppingList.map((obj, index) => 
        index === ind ? {...obj, bought: !obj.bought} : obj )
    )
  }

  function resetData() {
    sessionStorage.removeItem("shoppingList");
    window.location.reload();
  }

  useEffect(() => {
    if( shoppingList?.length > 0)
      sessionStorage.setItem('shoppingList', JSON.stringify(shoppingList))
    else{
      sessionStorage.removeItem("shoppingList");
      
    }
  }, [shoppingList])


  return (
    <div className="flex flex-row justify-center items-center bg-[var(--violet)] h-dvh " >
      <div className="border-2 border-hidden rounded-md bg-white p-4 flex flex-col justify-center items-center gap-2 md:w-[60%] lg:w-[50%] xl:w-[40%] w-[80%] ">
        <h5 className="font-bold">My Shopping List</h5>
        <p className="text-gray-400 text-xs">Organize your shopping list here</p>

        <form onSubmit={handleAdd} className="flex flex-col justify-center items-center w-full">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="input"
            placeholder="Type here..." 
            className="border-[1.5px] w-[90%] rounded-md px-2 text-xs py-1" 
          />
          <button className="text-white bg-[var(--violet)] hover:bg-[var(--violet-hover)] rounded-md  my-2 text-xs px-3 py-1.5">
            Add To List
          </button>
        </form>

        <div className="flex justify-evenly items-center w-full -translate-x-3">

          <div className="flex flex-col items-center text-xs">
            <p className="font-bold">{bought ? bought : 0}</p>
            <p>Bought</p>
          </div>

          <div className="flex flex-col items-center text-xs">
            <p className="font-bold">{shoppingList ? shoppingList?.length - bought : 0}</p>
            <p>Open</p>
          </div>
          
          <div className="flex flex-col items-center text-xs">
            <p className="font-bold">{shoppingList ? shoppingList?.length : 0}</p>
            <p>All</p>
          </div>

        </div>

        <div className="flex gap-3 mt-3">
          <button 
            className={`${active === 1 ? "active-button" : "passive-button"} text-xs py-1.5 px-2 rounded-md`}
            onClick={() => setActive(1)}
          >
            All Items
          </button>

          <button 
            className={`${active === 2 ? "active-button" : "passive-button"} text-xs py-1.5 px-2 rounded-md`}
            onClick={() => setActive(2)}
          >
            Pending
          </button>

          <button 
            className={`${active === 3 ? "active-button" : "passive-button"} text-xs py-1.5 px-2 rounded-md`}
            onClick={() => setActive(3)}
          >
            Purchased
          </button>
        </div>

        <div className="flex gap-2">
          <button 
            className="text-white bg-red-500 rounded-md my-1 text-[10px] px-2 py-1.5"
            onClick={() => handleDeletePurchased()}
          >
            Clear Purchased
          </button>
          <button 
            className="text-white bg-red-500 rounded-md my-1 text-[10px] px-2 py-1.5"
            onClick={() => resetData([])}
          >
            Clear List
          </button>
        </div>

        { shoppingList.length > 0 ? 
          <div className="flex flex-col items-center w-full">
            {shoppingList.map((object,index) => (
                <List 
                  object={object} 
                  handleToggle={handleToggle} 
                  handleDeleteItem={handleDeleteItem} 
                  index={index} key={index} 
                  active={active}
                />
            ))}
          </div>
          : 
          <p className="my-3 text-xs text-gray-400">🥖Your List is empty, add items to start</p>}
      </div>
    </div>
  )
}

export default App
