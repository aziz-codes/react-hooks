import React,{useState,useEffect} from 'react'

const Hooks = () => {
    const [screenSize, setscreenSize] = useState(window.screen.width);
    const handleResize =  () =>{
        setscreenSize(window.screen.width);
    }
  useEffect(()=>{
    
  
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize)
  },[screenSize])

  return (
    <div>Your screen size is {screenSize}</div>
  )
}

export default Hooks