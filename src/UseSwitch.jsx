import { useState } from "react";

export default function UseSwitch(valoreIniziale = false) {
  const [isOn , setIsOn] = useState(valoreIniziale)

  function toggle() {
   if(!isOn){
    setIsOn(true)
   }else if( isOn){
    setIsOn(valoreIniziale)
   }
  }

  return {isOn , toggle}
}