import UseSwitch from "./UseSwitch";
import UseDate from "./UseDate";

export default function App() {
  const {isOn , toggle} = UseSwitch()
  const currentDate = UseDate()
  
  

   return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>

      <div>
         <h1>Data e ora attuali:</h1>
          <p>{currentDate.toLocaleString()}</p>
    </div>
      
    </div>
  );
}