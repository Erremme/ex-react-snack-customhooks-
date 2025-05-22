import UseSwitch from "./UseSwitch";
import UseDate from "./UseDate";
import UseCustomPointer from "./UseCustomPointer";
import UseKeyPress from "./UseKeyPress";

export default function App() {
  const {isOn , toggle} = UseSwitch()
  const currentDate = UseDate()
  const customPointer = UseCustomPointer("🔥");
  const isPressed = UseKeyPress("Enter")
  
  

   return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>

      <div>
         <h1>Data e ora attuali:</h1>
          <p>{currentDate.toLocaleString()}</p>
    </div>

     <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>

    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
      
    </div>
  );
}