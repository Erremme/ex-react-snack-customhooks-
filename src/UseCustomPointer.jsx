import { useEffect, useState } from "react";

export default function UseCustomPointer(component) {
    const [position , setPosition] = useState({x:0, y:0})
   
    
    
    useEffect(() => {
        const  handleMove = (e) => {
            setPosition({x: e.clientX , y: e.clientY})
        }

        document.addEventListener("mousemove", handleMove)
        return () => document.removeEventListener("mousemove", handleMove)
      
    }, [])

    return (
        <div 
           style={{
                   position:"fixed",
                   top: position.y,
                   left: position.x,
                   transform: "traslate(-50% , -50%)",
                   cursor : "none"
           }}
        >
            {component}
        </div>
    )
    
}