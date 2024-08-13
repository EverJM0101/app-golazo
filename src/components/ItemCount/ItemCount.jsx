import { useState } from 'react';
import './ItemCount.css';

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue);
    

    const decrement = () => {
        if(count>1){
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount((count) => count + 1);
        }
    };

  return (
    <>
    <div className='contador'>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
    
    <button onClick={() => onAdd(count)} className='agregarbtn'> Agregar al Carrito</button>
      
    </>
  );
}

export default ItemCount
