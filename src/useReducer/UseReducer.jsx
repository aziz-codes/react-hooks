import React,{useReducer} from 'react'
import reducer from './reducer';
const UseReducer = () => {
    let initialValue = 0;
    const [count, dispatch] = useReducer(reducer, initialValue)
  return (
    <div className='flex justify-center items-center flex-row min-h-screen gap-4'>
        <button className='p-1 font-semibold rounded-sm border-none outline-none bg-sky-500' onClick={()=>dispatch({type: "INC"})}>+</button>
        <h3>{count}</h3>
        <button className='p-1 font-semibold rounded-sm border-none outline-none bg-sky-500'  onClick={()=>dispatch({type: "DEC"})}>-</button>
    </div>
  )
}

export default UseReducer