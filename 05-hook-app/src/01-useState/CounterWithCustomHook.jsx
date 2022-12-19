import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter,increment,decrement,reset}= useCounter();
  return (
    <>
        <div>CounterWithCustomHook: {counter}</div>
        <hr/>
        <button className='btn-primary' onClick={()=>increment(2)}>+1</button>
        <button className='btn-primary'onClick={()=>reset()}>RESET</button>
        <button className='btn-primary' onClick={()=>decrement(2)}>-1</button>

    </>
  )
}
