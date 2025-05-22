import { useState, useEffect } from "react";
export default function UseKeyPress(keyPress) {
    const [isPressed, setIsPressed] = useState(false)

   
    
   useEffect(() => {
    
    const handlePress = e =>setIsPressed(e.key === keyPress)
     
    const handleDown = e => {
      if(e.key === keyPress){
        setIsPressed(false)
      }

    } 
     document.addEventListener("keydown" , handlePress)
     document.addEventListener("keyup" , handleDown)

     return () =>{
      document.removeEventListener("keydown" , handlePress)
      document.removeEventListener("keyup" , handleDown)


      
     }
     
   },[])

   return isPressed

}