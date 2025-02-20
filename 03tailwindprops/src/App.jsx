import "./App.css";
import Card from "./Components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4">
        Tailwind test
      </h1>
      <Card username = "chai aur code"/>
      <Card username = "Prajwal"/>
    </>
  );
}

export default App;
