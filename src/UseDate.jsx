import { use } from "react";
import { useState , useEffect } from "react";
export default function UseDate( valoreIniziale = new Date()) {
  
  const [currentDate , setCurrentDate] = useState(valoreIniziale)

  useEffect(() => {
    const intervall = setInterval(() => {
        setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(intervall)
  }, [])

  return currentDate
}