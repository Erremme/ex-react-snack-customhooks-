import UseSwitch from "./UseSwitch";

export default function App() {
  const {isOn , toggle} = UseSwitch()

   return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}