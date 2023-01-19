import React,{useState,useEffect} from 'react'
import { useStateContext } from '../store/appStore';
const Hooks = () => {
  const {name} = useStateContext();
    const [screenSize, setscreenSize] = useState(window.screen.width);
    const handleResize =  () =>{
        setscreenSize(window.screen.width);
    }
  useEffect(()=>{
    
  
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize)
  },[screenSize])

  return (
    <div>Your screen size is {screenSize} your store value is {name}</div>
  )
}

export default Hooks